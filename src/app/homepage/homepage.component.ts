import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'cf-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  @ViewChild('name') nameKey!: ElementRef;

  constructor() {}



  ngOnInit(): void {
  }

  comecarChapeu(){
    localStorage.setItem("name", this.nameKey.nativeElement.value)
  }


}
