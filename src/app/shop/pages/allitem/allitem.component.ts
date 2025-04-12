import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-allitem',
  imports: [NgFor, RouterModule],
  templateUrl: './allitem.component.html',
  styleUrl: './allitem.component.css'
})
export class AllitemComponent {
  medicines = [
    { name: 'Paracetamol 500mg', description: 'Effective pain reliever and fever reducer' },
    { name: 'Ibuprofen', description: 'Anti-inflammatory and pain relief tablet' },
    { name: 'Aspirin', description: 'Used for mild to moderate pain' },
    { name: 'Diclofenac Gel', description: 'Topical gel for muscle/joint pain' },
    { name: 'Acetaminophen', description: 'Common pain and fever reducer' },
  ];
}
