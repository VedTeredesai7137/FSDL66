import { Component } from '@angular/core';

@Component({
  selector: 'app-item-list',  // Selector for this component
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent {
  items: string[] = ['Item 1', 'Item 2', 'Item 3'];
  newItem: string = '';

  addItem() {
    if (this.newItem) {
      this.items.push(this.newItem);
      this.newItem = '';  // Reset input field
    }
  }
}
