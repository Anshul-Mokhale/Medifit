import { NgClass, NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';


interface Beauty {
  id: number;
  name: string;
  company: string;
  category: string;
  created_at: string;
}
@Component({
  selector: 'app-adminbeauty',
  imports: [RouterModule, FormsModule, NgClass, NgFor],
  templateUrl: './adminbeauty.component.html',
  styleUrl: './adminbeauty.component.css'
})
export class AdminbeautyComponent implements OnInit {
  users: Beauty[] = [];
  filteredUsers: Beauty[] = [];
  paginatedUsers: Beauty[] = [];

  searchTerm = '';
  sortDirection: { [key: string]: boolean } = {};
  currentPage = 1;
  entriesPerPage = 10;

  ngOnInit(): void {
    this.users = [
      { id: 1, name: 'Alice Johnson', company: 'alice@example.com', category: 'Medicine', created_at: '2024-01-01' },
      { id: 2, name: 'Bob Smith', company: 'bob@example.com', category: 'Syrup', created_at: '2024-01-02' },
      { id: 3, name: 'Carol White', company: 'carol@example.com', category: 'Medicine', created_at: '2024-01-03' },
      { id: 4, name: 'Ivy Adams', company: 'ivy@example.com', category: 'Syrup', created_at: '2024-01-04' },
      { id: 5, name: 'Eve Brown', company: 'eve@example.com', category: 'Syrup', created_at: '2024-01-05' },
      { id: 6, name: 'Frank Green', company: 'frank@example.com', category: 'Medicine', created_at: '2024-01-06' },
      { id: 7, name: 'Grace Lee', company: 'grace@example.com', category: 'Syrup', created_at: '2024-01-07' },
      { id: 8, name: 'Hank Davis', company: 'hank@example.com', category: 'Medicine', created_at: '2024-01-08' },
      { id: 9, name: 'David Black', company: 'david@example.com', category: 'Syrup', created_at: '2024-01-04' },
      { id: 10, name: 'Jack Wilson', company: 'jack@example.com', category: 'Injection', created_at: '2024-01-10' },
      { id: 11, name: 'Kate Moore', company: 'kate@example.com', category: 'Injection', created_at: '2024-01-11' },
      { id: 12, name: 'Leo Clark', company: 'leo@example.com', category: 'Medicine', created_at: '2024-01-12' },
      { id: 13, name: 'Mia Hall', company: 'mia@example.com', category: 'Injection', created_at: '2024-01-13' },
      { id: 14, name: 'Nate Young', company: 'nate@example.com', category: 'Injection', created_at: '2024-01-14' },
      { id: 15, name: 'Olivia King', company: 'olivia@example.com', category: 'Injection', created_at: '2024-01-15' },
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
      user.company.toLowerCase().includes(term)
    );
    this.currentPage = 1;
    this.updatePaginatedUsers();
  }

  sortBy(field: keyof Beauty): void {
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

