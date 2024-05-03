/*import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-inventory',
  templateUrl: './view-inventory.component.html',
  styleUrls: ['./view-inventory.component.css']
})
export class ViewInventoryComponent implements OnInit {
  items: any[] = [
    { name: 'Leather Sofa', quantity: 8, price: 799.99, description: 'Spacious and comfortable 3-seater sofa' },
    { name: 'Dining Table (6 seater)', quantity: 5, price: 499.99, description: 'Solid wood dining table with chairs' },
    { name: 'Queen-size Bed Frame', quantity: 12, price: 299.99, description: 'Durable metal bed frame with mattress support' },
    { name: 'Office Chair', quantity: 10, price: 149.99, description: 'Ergonomic office chair with adjustable features' },
    { name: 'Coffee Table', quantity: 15, price: 99.99, description: 'Modern glass coffee table with storage' },
    { name: 'Nightstand', quantity: 4, price: 79.99, description: 'Set of two wooden nightstands with drawers' },
    { name: 'Bookshelf', quantity: 6, price: 199.99, description: 'Tall bookshelf with multiple shelves' },
    { name: 'Dresser', quantity: 3, price: 399.99, description: 'Spacious dresser with drawers and mirror' },
    { name: 'Rug (8x10)', quantity: 7, price: 149.99, description: 'Soft and stylish rug in various colors' },
    { name: 'Bar Stools (Set of 2)', quantity: 8, price: 129.99, description: 'Comfortable bar stools with adjustable height' },
    { name: 'Patio Chair', quantity: 15, price: 59.99, description: 'Folding patio chair with weather-resistant material' },
    { name: 'Hammock', quantity: 4, price: 79.99, description: 'Durable hammock with stand for outdoor relaxation' },
    { name: 'TV Stand', quantity: 10, price: 199.99, description: 'Modern TV stand with storage compartments' },
    { name: 'Console Table', quantity: 5, price: 249.99, description: 'Sleek console table with metal legs and glass top' },
    { name: 'Accent Chair', quantity: 3, price: 349.99, description: 'Stylish accent chair with unique design' },
    { name: 'Ottoman', quantity: 2, price: 129.99, description: 'Comfortable ottoman with storage space' },
    { name: 'Desk Lamp', quantity: 8, price: 49.99, description: 'Modern desk lamp with adjustable lighting' },
    { name: 'Area Rug (5x7)', quantity: 12, price: 99.99, description: 'Decorative area rug for various rooms' },
    { name: 'Mirror', quantity: 6, price: 79.99, description: 'Large wall mirror with different frame styles' }
];

  ngOnInit() {
    // ...
  }
}
*/

import { Component, OnInit } from '@angular/core';
import { DataTransferService } from '../../data-transfer.service';
import { Router } from '@angular/router'; // Import Router


@Component({
  selector: 'app-view-inventory',
  templateUrl: './view-inventory.component.html',
  styleUrls: ['./view-inventory.component.css']
})
export class ViewInventoryComponent implements OnInit {
  items: any[] = [];

  constructor(private dataTransferService: DataTransferService, private router: Router) { } // Inject Router

  ngOnInit() {
    this.dataTransferService.getItems()
      .subscribe(items => this.items = items);
  }

  confirmDelete(item: any) {
    if (confirm(`Are you sure you want to delete "${item.name}"?`)) {
      this.deleteItem(item._id);
    }
  }

  deleteItem(itemId: string) {
    this.dataTransferService.deleteItem(itemId).subscribe(() => {
      console.log('Item deleted successfully');
      // Update the items list to reflect the deletion
      this.items = this.items.filter(item => item._id !== itemId);
    }, error => {
      console.error('Error deleting item:', error);
    });
  }

  editItem(item: any) {
    // Navigate to the edit-inventory page with the item's id as a parameter
    this.router.navigate(['/edit-inventory', item._id]);
  }
}
