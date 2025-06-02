import { NgFor } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-adminprint',
  imports: [NgFor],
  templateUrl: './adminprint.component.html',
  styleUrl: './adminprint.component.css'
})
export class AdminprintComponent {
  @Input() orderNumber: string = 'MF123456';
  @Input() orderDate: string = 'June 2, 2025';
  @Input() customerName: string = 'Anshul Mokhale';
  @Input() customerEmail: string = 'anshul@example.com';

  @Input() items = [
    { name: 'Paracetamol 500mg', quantity: 2, price: 40 },
    { name: 'Vitamin D3 Tablets', quantity: 1, price: 120 },
    { name: 'Digital Thermometer', quantity: 1, price: 250 },
  ];

  get total(): number {
    return this.items.reduce((acc, item) => acc + (item.price * item.quantity), 0);
  }

  printReceipt() {
    window.print();
  }
}
