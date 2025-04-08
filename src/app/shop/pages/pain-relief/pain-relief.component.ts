import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-pain-relief',
  imports: [NgFor],
  templateUrl: './pain-relief.component.html',
  styleUrl: './pain-relief.component.css'
})
export class PainReliefComponent {
  medicines = [
    { name: 'Paracetamol 500mg', description: 'Effective pain reliever and fever reducer' },
    { name: 'Ibuprofen', description: 'Anti-inflammatory and pain relief tablet' },
    { name: 'Aspirin', description: 'Used for mild to moderate pain' },
    { name: 'Diclofenac Gel', description: 'Topical gel for muscle/joint pain' },
    { name: 'Acetaminophen', description: 'Common pain and fever reducer' },
  ];
}
