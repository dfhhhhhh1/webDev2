import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router'; // Import ActivatedRoute and Router
import { DataTransferService } from '../../data-transfer.service';

@Component({
  selector: 'app-edit-inventory',
  templateUrl: './edit-inventory.component.html',
  styleUrls: ['./edit-inventory.component.css']
})
export class EditInventoryComponent implements OnInit {
  editForm: FormGroup;
  itemId: string = '';

  constructor(
    private fb: FormBuilder,
    private dataTransferService: DataTransferService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.editForm = this.fb.group({
      name: ['', Validators.required],
      quantity: [0, [Validators.required, Validators.min(0)]],
      price: [0, Validators.required],
      description: ''
    });
  }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.itemId = params.get('id') ?? '';
      console.log('Item ID:', this.itemId); // Log the itemId to the console

      this.dataTransferService.getItem(this.itemId).subscribe((item: any) => {
        this.editForm.patchValue({
          name: item.name,
          quantity: item.quantity,
          price: item.price,
          description: item.description
        });
      });
    });
  }

  onSubmit() {
    const updatedItem = {
      name: this.editForm.value.name,
      quantity: this.editForm.value.quantity,
      price: this.editForm.value.price,
      description: this.editForm.value.description
    };

    this.dataTransferService.updateItem(this.itemId, updatedItem).subscribe(() => {
      console.log('Item updated successfully');
      this.router.navigate(['/view-inventory']); // Navigate back to view-inventory
    }, error => {
      console.error('Error updating item:', error);
    });
  }

  onCancel() {
    // Navigate back to view-inventory without making any changes
    this.router.navigate(['/view-inventory']);
  }
}
