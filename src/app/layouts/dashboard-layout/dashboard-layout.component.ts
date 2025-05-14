import { Component } from '@angular/core';
import { DashboardheaderComponent } from "../../Components/dashboardheader/dashboardheader.component";
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-dashboard-layout',
  imports: [RouterModule, DashboardheaderComponent],
  templateUrl: './dashboard-layout.component.html',
  styleUrl: './dashboard-layout.component.css'
})
export class DashboardLayoutComponent {

}
