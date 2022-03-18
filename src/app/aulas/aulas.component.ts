import { Router } from '@angular/router';

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cf-aulas',
  templateUrl: './aulas.component.html',
  styleUrls: ['./aulas.component.scss'],
})
export class AulasComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {}

  goToPage(pageName: string): void {
    this.router.navigate([`${pageName}`]);
  }
}
