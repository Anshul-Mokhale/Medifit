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
    event.preventDefault();
    this.loading = true;
    this.successMessage = '';
    this.isError = false;

    this.contactService.sendContactData(this.formData).subscribe({
      next: (response) => {
        console.log('Form submitted successfully', response);
        this.successMessage = 'Your message has been sent successfully!';
        this.isError = false;
        this.showSuccessPopup = true;
      },
      error: (error) => {
        console.error('There was an error submitting the form', error);
        this.successMessage = 'Failed to send the mail. Please try again later.';
        this.isError = true;
        this.showSuccessPopup = true;
      },
      complete: () => {
        this.loading = false;
        console.log('Form submission complete');
      }
    });
  }



  closePopup() {
    this.showSuccessPopup = false;
  }
}
