import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { DiretoresServices } from '../diretores/diretores.service';

@Component({
  selector: 'cf-diretores-detalhe',
  templateUrl: './diretores-detalhe.component.html',
  styleUrls: ['./diretores-detalhe.component.scss']
})
export class DiretoresDetalheComponent implements OnInit {

  id!: number;
  inscricao!: Subscription
  diretor: any;




  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private diretoresService: DiretoresServices) {
    //this.id = this.route.snapshot.params['id'];
    //console.log(this.route)
  }

  ngOnInit(){
    this.inscricao = this.route.params.subscribe(
      (params: any) => {
        this.id = params['id'];

        this.diretor = this.diretoresService.getDiretor(this.id);

        if(this.diretor == null){
            this.router.navigate(['/naoEncontrado'])
        }
      }
    )
  }

  ngOnDestroy(){
    this.inscricao.unsubscribe();
  }

}
