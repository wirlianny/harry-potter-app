import { DiretoresRoutingModule } from './diretores.routing.module';
import { CommonModule } from '@angular/common';
import { DiretoresServices } from './diretores.service';
import { DiretorNaoEncontradorComponent } from './../diretores/diretor-nao-encontrador/diretor-nao-encontrador.component';
import { DiretoresDetalheComponent } from './../diretores/diretores-detalhe/diretores-detalhe.component';
import { DiretoresComponent } from './diretores.component';
import { NgModule } from "@angular/core";


@NgModule({
  imports: [
    CommonModule,
    DiretoresRoutingModule
  ],
  exports: [],
  declarations: [
    DiretoresComponent,
    DiretoresDetalheComponent,
    DiretorNaoEncontradorComponent

  ],
  providers: [DiretoresServices],
})

export class DiretoresModule {}
