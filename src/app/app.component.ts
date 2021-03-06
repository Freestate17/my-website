import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  sidenavOpen = false;

  public toggleSidenav(): void {
    this.sidenavOpen = !this.sidenavOpen;
  }
}
