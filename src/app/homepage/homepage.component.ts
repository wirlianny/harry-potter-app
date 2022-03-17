import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'cf-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss'],
})
export class HomepageComponent implements OnInit {
  @ViewChild('name') nameKey!: ElementRef;

  constructor(private router: Router) {}

  ngOnInit(): void {}

  goToPage(pageName: string): void {
    localStorage.setItem('name', this.nameKey.nativeElement.value);
    this.router.navigate([`${pageName}`]);
  }
}
