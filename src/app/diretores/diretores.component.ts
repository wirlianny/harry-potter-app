import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { DiretoresServices } from './diretores.service';

@Component({
  selector: 'cf-diretores',
  templateUrl: './diretores.component.html',
  styleUrls: ['./diretores.component.scss'],
})
export class DiretoresComponent implements OnInit {
  diretores!: any[];
  pagina!: number;
  inscricao!: Subscription;

  constructor(
    private diretoresServices: DiretoresServices,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.diretores = this.diretoresServices.getDiretores();

    this.inscricao = this.route.queryParams.subscribe((queryParams: any) => {
      this.pagina = queryParams['pagina'];
    });
  }

  ngOnDestroy() {
    this.inscricao.unsubscribe();
  }

  proximaPagina() {
    //this.pagina++;
    this.router.navigate(['/diretores'], {
      queryParams: { pagina: ++this.pagina },
    });
  }

  goToPage(pageName: string): void {
    this.router.navigate([`${pageName}`]);
  }
}
