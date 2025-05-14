import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-adminviewuser',
  imports: [RouterModule],
  templateUrl: './adminviewuser.component.html',
  styleUrl: './adminviewuser.component.css'
})
export class AdminviewuserComponent {
  userEmail = 'alex.johnson@example.com';
}
