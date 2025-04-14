import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [RouterModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  // Define the onSubmit method to handle form submission
  onSubmit(): void {
    if (this.email && this.password) {
      // Handle form submission logic here, like calling a login service
      console.log('Form Submitted!');
      console.log('Email:', this.email);
      console.log('Password:', this.password);
    } else {
      console.log('Please fill out both fields');
    }
  }
}
