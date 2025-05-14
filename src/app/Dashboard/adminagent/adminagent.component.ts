import { NgClass, NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';


interface Agent {
  id: number;
  name: string;
  email: string;
  created_at: string;
}
@Component({
  selector: 'app-adminagent',
  imports: [RouterModule, FormsModule, NgClass, NgFor],
  templateUrl: './adminagent.component.html',
  styleUrl: './adminagent.component.css'
})
export class AdminagentComponent implements OnInit {
  users: Agent[] = [];
  filteredUsers: Agent[] = [];
  paginatedUsers: Agent[] = [];

  searchTerm = '';
  sortDirection: { [key: string]: boolean } = {};
  currentPage = 1;
  entriesPerPage = 10;

  ngOnInit(): void {
    this.users = [
      { id: 1, name: 'Alice Johnson', email: 'alice@example.com', created_at: '2024-01-01' },
      { id: 2, name: 'Bob Smith', email: 'bob@example.com', created_at: '2024-01-02' },
      { id: 3, name: 'Carol White', email: 'carol@example.com', created_at: '2024-01-03' },
      { id: 4, name: 'Ivy Adams', email: 'ivy@example.com', created_at: '2024-01-04' },
      { id: 5, name: 'Eve Brown', email: 'eve@example.com', created_at: '2024-01-05' },
      { id: 6, name: 'Frank Green', email: 'frank@example.com', created_at: '2024-01-06' },
      { id: 7, name: 'Grace Lee', email: 'grace@example.com', created_at: '2024-01-07' },
      { id: 8, name: 'Hank Davis', email: 'hank@example.com', created_at: '2024-01-08' },
      { id: 9, name: 'David Black', email: 'david@example.com', created_at: '2024-01-04' },
      { id: 10, name: 'Jack Wilson', email: 'jack@example.com', created_at: '2024-01-10' },
      { id: 11, name: 'Kate Moore', email: 'kate@example.com', created_at: '2024-01-11' },
      { id: 12, name: 'Leo Clark', email: 'leo@example.com', created_at: '2024-01-12' },
      { id: 13, name: 'Mia Hall', email: 'mia@example.com', created_at: '2024-01-13' },
      { id: 14, name: 'Nate Young', email: 'nate@example.com', created_at: '2024-01-14' },
      { id: 15, name: 'Olivia King', email: 'olivia@example.com', created_at: '2024-01-15' },
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
      user.email.toLowerCase().includes(term)
    );
    this.currentPage = 1;
    this.updatePaginatedUsers();
  }

  sortBy(field: keyof Agent): void {
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

