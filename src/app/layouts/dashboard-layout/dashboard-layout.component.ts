import { Component } from '@angular/core';
import { DashboardheaderComponent } from "../../Components/dashboardheader/dashboardheader.component";
import { RouterModule } from '@angular/router';
import { DashboardfooterComponent } from "../../Components/dashboardfooter/dashboardfooter.component";

@Component({
  selector: 'app-dashboard-layout',
  imports: [RouterModule, DashboardheaderComponent, DashboardfooterComponent],
  templateUrl: './dashboard-layout.component.html',
  styleUrl: './dashboard-layout.component.css'
})
export class DashboardLayoutComponent {

}
