import { NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';

@Component({
  selector: 'app-admincontactview',
  imports: [NgIf, RouterModule],
  templateUrl: './admincontactview.component.html',
  styleUrl: './admincontactview.component.css'
})
export class AdmincontactviewComponent implements OnInit {
  request: any;

  mockRequests = [
    {
      id: 1,
      name: 'John Doe',
      email: 'john@example.com',
      phone: '9876543210',
      subject: 'Service Inquiry',
      message: 'I want to know more about your pricing.',
      created_at: new Date('2025-06-18T10:00:00')
    },
    {
      id: 2,
      name: 'Jane Smith',
      email: 'jane@example.com',
      phone: '9123456780',
      subject: 'Support Needed',
      message: 'I am facing issues logging into my account.',
      created_at: new Date('2025-06-17T15:30:00')
    }
  ];

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.request = this.mockRequests.find(r => r.id === id);
  }
}