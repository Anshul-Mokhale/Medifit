import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-useraccountupdate',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './useraccountupdate.component.html',
  styleUrl: './useraccountupdate.component.css'
})
export class UseraccountupdateComponent implements OnInit {
  profileForm!: FormGroup;
  bloodGroups = ['A+', 'A-', 'B+', 'B-', 'O+', 'O-', 'AB+', 'AB-'];

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    const userData = {
      name: 'John Doe',
      email: 'john@example.com',
      phone: '1234567890',
      age: 30,
      gender: 'male',
      blood_group: 'O+',
      identity_proof: 'https://via.placeholder.com/200x150?text=ID+Proof',
      profile_pic: 'https://via.placeholder.com/150'
    };

    this.profileForm = this.fb.group({
      name: [userData.name],
      email: [userData.email],
      phone: [userData.phone],
      age: [userData.age],
      gender: [userData.gender],
      blood_group: [userData.blood_group],
      identity_proof: [userData.identity_proof],
      profile_pic: [userData.profile_pic]
    });
  }

  onProfilePicChange(event: any): void {
    const file = event.target.files[0];
    this.readFile(file, 'profile_pic');
  }

  onIdentityProofChange(event: any): void {
    const file = event.target.files[0];
    this.readFile(file, 'identity_proof');
  }

  private readFile(file: File, controlName: string): void {
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        this.profileForm.patchValue({ [controlName]: reader.result });
      };
      reader.readAsDataURL(file);
    }
  }

  onCancel(): void {
    this.ngOnInit(); // Reset form to original values
  }

  onSubmit(): void {
    if (this.profileForm.valid) {
      console.log('Updated Profile:', this.profileForm.value);
      // Send updated form to backend
    }
  }
}
