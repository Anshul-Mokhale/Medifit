import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  imports: [CommonModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  activeIndex: number | null = null;

  toggleFaq(index: number) {
    this.activeIndex = this.activeIndex === index ? null : index;
  }
}
