import { NgClass, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-dashboardheader',
  imports: [RouterModule, NgClass, NgIf],
  templateUrl: './dashboardheader.component.html',
  styleUrl: './dashboardheader.component.css'
})
export class DashboardheaderComponent {
  sidebarOpen = false;
  itemsDropdownOpen = false;

  toggleSidebar() {
    this.sidebarOpen = !this.sidebarOpen;
  }
}
