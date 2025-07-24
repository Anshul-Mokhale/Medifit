import { CommonModule } from '@angular/common';
import { Component, NgModule } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-useraccountdelete',
  imports: [CommonModule, FormsModule],
  templateUrl: './useraccountdelete.component.html',
  styleUrls: ['./useraccountdelete.component.css']
})
export class UseraccountdeleteComponent {
  confirmationText: string = '';

  constructor(private router: Router) { }

  confirmDelete() {
    if (this.confirmationText === 'DELETE MY ACCOUNT') {
      // TODO: Call your API to delete the account
      alert('Your account has been permanently deleted!');
      this.router.navigate(['/']); // Redirect after deletion
    }
  }

  cancel() {
    this.router.navigate(['/']); // Navigate to dashboard/home
  }
}
