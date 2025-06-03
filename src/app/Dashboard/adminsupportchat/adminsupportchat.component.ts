import { NgClass, NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';

@Component({
  selector: 'app-adminsupportchat',
  imports: [NgFor, FormsModule, NgClass],
  templateUrl: './adminsupportchat.component.html',
  styleUrl: './adminsupportchat.component.css'
})
export class AdminsupportchatComponent {
  messages = [
    { from: 'user', text: 'Hi, I have an issue with my order.' },
    { from: 'support', text: 'Hello! Could you please explain the issue?' },
    { from: 'user', text: 'The product I received is damaged.' },
    { from: 'support', text: 'I’m sorry to hear that. We will send a replacement soon.' }
  ];

  newMessage = '';

  sendMessage() {
    if (this.newMessage.trim()) {
      this.messages.push({ from: 'user', text: this.newMessage.trim() });
      this.newMessage = '';
    }
  }
}
