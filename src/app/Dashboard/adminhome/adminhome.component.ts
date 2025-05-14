import { NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-adminhome',
  imports: [NgFor, RouterModule],
  templateUrl: './adminhome.component.html',
  styleUrl: './adminhome.component.css'
})
export class AdminhomeComponent implements OnInit {

  tickets = [
    { title: ' #1001 - Login issue', time: '2 mins ago' },
    { title: ' #1002 - Payment error', time: '10 mins ago' },
    { title: ' #1003 - Slow response', time: '30 mins ago' },
    { title: ' #1004 - Missing invoice', time: '1 hour ago' },
  ];

  contacts = [
    { name: 'John Doe', message: 'Need help with product setup.' },
    { name: 'Jane Smith', message: 'Facing issue with login.' },
    { name: 'Emily Johnson', message: 'Inquiry about pricing.' },
    { name: 'Robert Brown', message: 'Unable to receive OTP.' },
  ];

  orders = [
    { id: 'ORD001', status: 'Processing' },
    { id: 'ORD002', status: 'Shipped' },
    { id: 'ORD003', status: 'Delivered' },
    { id: 'ORD004', status: 'Cancelled' },
  ];
  usersCount = 0;
  agentsCount = 0;
  deliveryCount = 0;
  productsCount = 0;

  // Replace with actual data from service or backend
  targetCounts = {
    users: 120,
    agents: 35,
    delivery: 20,
    products: 450
  };

  ngOnInit(): void {
    this.animateCount('usersCount', this.targetCounts.users);
    this.animateCount('agentsCount', this.targetCounts.agents);
    this.animateCount('deliveryCount', this.targetCounts.delivery);
    this.animateCount('productsCount', this.targetCounts.products);
  }

  animateCount(property: 'usersCount' | 'agentsCount' | 'deliveryCount' | 'productsCount', target: number) {
    let current = 0;
    const step = Math.ceil(target / 100);
    const interval = setInterval(() => {
      current += step;
      if (current >= target) {
        (this as any)[property] = target;
        clearInterval(interval);
      } else {
        (this as any)[property] = current;
      }
    }, 20);
  }
}