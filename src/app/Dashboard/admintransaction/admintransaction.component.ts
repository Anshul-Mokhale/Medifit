import { NgClass, NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

interface Health {
  id: number;
  name: string;
  company: string;
  status: string;
  person: string;
  created_at: string;
}
@Component({
  selector: 'app-admintransaction',
  imports: [RouterModule, FormsModule, NgClass, NgFor],
  templateUrl: './admintransaction.component.html',
  styleUrl: './admintransaction.component.css'
})
export class AdmintransactionComponent {
  users: Health[] = [];
  filteredUsers: Health[] = [];
  paginatedUsers: Health[] = [];

  searchTerm = '';
  sortDirection: { [key: string]: boolean } = {};
  currentPage = 1;
  entriesPerPage = 10;

  ngOnInit(): void {
    this.users = [
      { id: 1, name: 'Alice Johnson', company: 'Cash', status: 'Pending', person: '2014.00', created_at: '2024-01-01' },
      { id: 2, name: 'Bob Smith', company: 'UPI', status: 'Pending', person: '1224.00', created_at: '2024-01-02' },
      { id: 3, name: 'Carol White', company: 'UPI', status: 'Pending', person: '8547.00', created_at: '2024-01-03' },
      { id: 4, name: 'Ivy Adams', company: 'UPI', status: 'Pending', person: '8745.00', created_at: '2024-01-04' },
      { id: 5, name: 'Eve Brown', company: 'UPI', status: 'Successful', person: '5364.00', created_at: '2024-01-05' },
      { id: 6, name: 'Frank Green', company: 'Cash', status: 'Successful', person: '2993.00', created_at: '2024-01-06' },
      { id: 7, name: 'Grace Lee', company: 'UPI', status: 'Successful', person: '2014.00', created_at: '2024-01-07' },
      { id: 8, name: 'Hank Davis', company: 'UPI', status: 'Successful', person: '2134.00', created_at: '2024-01-08' },
      { id: 9, name: 'David Black', company: 'Cash', status: 'Rejected', person: '872.00', created_at: '2024-01-04' },
      { id: 10, name: 'Jack Wilson', company: 'Cash', status: 'Successful', person: '701.00', created_at: '2024-01-10' },
      { id: 11, name: 'Kate Moore', company: 'Cash', status: 'Successful', person: '504.001', created_at: '2024-01-11' },
      { id: 12, name: 'Leo Clark', company: 'Cash', status: 'Successful', person: '205.00', created_at: '2024-01-12' },
      { id: 13, name: 'Mia Hall', company: 'UPI', status: 'Successful', person: '3214.00', created_at: '2024-01-13' },
      { id: 14, name: 'Nate Young', company: 'UPI', status: 'Successful', person: '224.00', created_at: '2024-01-14' },
      { id: 15, name: 'Olivia King', company: 'UPI', status: 'Rejected', person: '204.00', created_at: '2024-01-15' },
    ];

    this.filteredUsers = [...this.users];
    this.updatePaginatedUsers();
  }

  updatePaginatedUsers(): void {
    const start = (this.currentPage - 1) * this.entriesPerPage;
    const end = start + this.entriesPerPage;
    this.paginatedUsers = this.filteredUsers.slice(start, end);
  }

  onSearch(): void {
    const term = this.searchTerm.toLowerCase();
    this.filteredUsers = this.users.filter(user =>
      user.name.toLowerCase().includes(term) ||
      user.person.toLowerCase().includes(term)
    );
    this.currentPage = 1;
    this.updatePaginatedUsers();
  }

  sortBy(field: keyof Health): void {
    this.sortDirection[field] = !this.sortDirection[field];
    this.filteredUsers.sort((a, b) => {
      if (a[field]! < b[field]!) return this.sortDirection[field] ? -1 : 1;
      if (a[field]! > b[field]!) return this.sortDirection[field] ? 1 : -1;
      return 0;
    });
    this.updatePaginatedUsers();
  }

  changeEntriesPerPage(event: Event): void {
    const select = event.target as HTMLSelectElement;
    this.entriesPerPage = parseInt(select.value);
    this.currentPage = 1;
    this.updatePaginatedUsers();
  }

  goToPage(page: number): void {
    this.currentPage = page;
    this.updatePaginatedUsers();
  }

  get totalPages(): number {
    return Math.ceil(this.filteredUsers.length / this.entriesPerPage);
  }
}

