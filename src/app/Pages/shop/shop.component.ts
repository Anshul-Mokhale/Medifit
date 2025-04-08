import { Component, ElementRef, HostListener } from '@angular/core';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-shop',
  imports: [RouterModule], // ✅ Add FormsModule here
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent {

  showSidebar: boolean = false;

  constructor(private eRef: ElementRef) { }

  toggleSidebar() {
    this.showSidebar = !this.showSidebar;
  }

  closeSidebar() {
    this.showSidebar = false;
  }

  // Detect clicks outside the sidebar to close it
  @HostListener('document:click', ['$event'])
  onClickOutside(event: MouseEvent) {
    const target = event.target as HTMLElement;
    const clickedInside = this.eRef.nativeElement.contains(target);
    if (!clickedInside && this.showSidebar) {
      this.closeSidebar();
    }
  }
}
