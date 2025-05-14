import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-adminviewagent',
  imports: [RouterModule],
  templateUrl: './adminviewagent.component.html',
  styleUrl: './adminviewagent.component.css'
})
export class AdminviewagentComponent {
  userEmail = 'alex.johnson@example.com';
}
