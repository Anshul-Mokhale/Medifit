import { CommonModule, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ContactServiceService } from '../../Services/contact-service.service';

@Component({
  selector: 'app-contact',
  imports: [CommonModule, NgIf, FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  activeIndex: number | null = null;

  toggleFaq(index: number) {
    this.activeIndex = this.activeIndex === index ? null : index;
  }

  formData = {
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  };
  successMessage: string = '';
  loading: boolean = false
  isError: boolean = false


  showSuccessPopup = false;
  constructor(private contactService: ContactServiceService) { }

  onSubmit(event: Event) {
    event.preventDefault(); // Prevents the default form submission behavior (like page reload)

    this.loading = true; // Sets loading to true (can be used to show a spinner or disable the form)
    this.successMessage = ''; // Clears any previous success message
    this.isError = false; // Resets the error flag

    // Calls the contact service to send the form data
    this.contactService.sendContactData(this.formData).subscribe({
      next: (response) => { // If the HTTP request succeeds
        console.log('Form submitted successfully', response); // Logs success response in the console
        this.successMessage = 'Thank you for reaching out. We will get back to you soon!'; // Shows success message to the user
        this.isError = false; // Ensures error flag is false
        this.showSuccessPopup = true; // Triggers a popup or alert to show success
      },
      error: (error) => {
        this.loading = false;
        this.isError = true;

        // Try to extract a readable error message from backend
        const backendMessage = error?.error?.message || error?.message || 'Failed to send the mail. Please try again later.';

        this.successMessage = backendMessage;
        this.showSuccessPopup = true; // Show error popup with message
      }
      ,
      complete: () => { // Runs after either success or error (always runs last)
        this.loading = false; // Turns off the loading indicator
        console.log('Form submission complete'); // Logs that the request process has completed
      }
    });
  }




  closePopup() {
    this.showSuccessPopup = false;
  }
}
