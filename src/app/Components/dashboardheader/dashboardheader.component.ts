import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-dashboardheader',
  imports: [RouterModule, NgClass],
  templateUrl: './dashboardheader.component.html',
  styleUrl: './dashboardheader.component.css'
})
export class DashboardheaderComponent {
  sidebarOpen = false;

  toggleSidebar() {
    this.sidebarOpen = !this.sidebarOpen;
  }
}
