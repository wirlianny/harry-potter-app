import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'cf-diretores-detalhe',
  templateUrl: './diretores-detalhe.component.html',
  styleUrls: ['./diretores-detalhe.component.scss']
})
export class DiretoresDetalheComponent implements OnInit {

  id: string;

  constructor(private route: ActivatedRoute) {
    this.id = this.route.snapshot.params['id'];
  }

  ngOnInit(): void {
  }

}
