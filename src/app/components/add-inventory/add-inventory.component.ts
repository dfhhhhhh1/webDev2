
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataTransferService } from '../../data-transfer.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-add-inventory',
  templateUrl: './add-inventory.component.html',
  styleUrls: ['./add-inventory.component.css']
})
export class AddInventoryComponent implements OnInit {
  addForm: FormGroup;

  constructor(private fb: FormBuilder, private dataTransferService: DataTransferService, private router: Router) {
    this.addForm = this.fb.group({
      name: ['', Validators.required],
      quantity: [0, [Validators.required, Validators.min(0)]],
      price: [0, Validators.required],
      description: ''
    });
  }

  ngOnInit() {
  }

  onSubmit() {
    if (this.addForm.valid) {
      this.dataTransferService.addItem(this.addForm.value).subscribe(() => {
        console.log('Item added successfully');
        this.addForm.reset();
        this.router.navigate(['/view-inventory']); // Navigate back to view-inventory
      }, (error: any) => {
        console.error('Error adding item:', error);
      });
    } else {
      console.error('Form is invalid');
    }
  }
}

