import { Router } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'cf-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'harry-potter-app';

  constructor(private router: Router) {}

  goToPage(pageName: string): void {
    this.router.navigate([`${pageName}`]);
  }
}
