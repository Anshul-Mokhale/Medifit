import { Component, NgModule, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-cart',
  imports: [RouterModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {
  cartItems: any[] = [];

  ngOnInit(): void {
    // Dummy cart items
    this.cartItems = [
      {
        id: 1,
        name: 'Wireless Headphones',
        price: 59.99,
        quantity: 1,
        image: 'https://via.placeholder.com/80x80?text=Headphones'
      },
      {
        id: 2,
        name: 'Smart Watch',
        price: 129.99,
        quantity: 2,
        image: 'https://via.placeholder.com/80x80?text=Watch'
      },
      {
        id: 3,
        name: 'Bluetooth Speaker',
        price: 39.99,
        quantity: 1,
        image: 'https://via.placeholder.com/80x80?text=Speaker'
      }
    ];
  }

  getTotal(): number {
    return this.cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  }

  removeItem(itemToRemove: any) {
    this.cartItems = this.cartItems.filter(item => item !== itemToRemove);
  }
}
