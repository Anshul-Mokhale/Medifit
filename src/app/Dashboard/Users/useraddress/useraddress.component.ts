import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-useraddress',
  imports: [NgFor],
  templateUrl: './useraddress.component.html',
  styleUrl: './useraddress.component.css'
})
export class UseraddressComponent {
  addresses = [
    {
      name: 'John Doe',
      phone: '+91 9876543210',
      street: '123 Main Street',
      city: 'Mumbai',
      state: 'Maharashtra',
      pin: '400001'
    },
    {
      name: 'Priya Sharma',
      phone: '+91 9822334455',
      street: '456 Park Avenue',
      city: 'Pune',
      state: 'Maharashtra',
      pin: '411001'
    },
    {
      name: 'Amit Verma',
      phone: '+91 9988776655',
      street: '78 Ring Road',
      city: 'Bangalore',
      state: 'Karnataka',
      pin: '560001'
    },
    {
      name: 'Neha Singh',
      phone: '+91 9123456789',
      street: '22 Lotus Apartment',
      city: 'Delhi',
      state: 'Delhi',
      pin: '110001'
    },
    {
      name: 'Ravi Deshmukh',
      phone: '+91 9012345678',
      street: '789 Hill View',
      city: 'Nagpur',
      state: 'Maharashtra',
      pin: '440001'
    }
  ];

}
