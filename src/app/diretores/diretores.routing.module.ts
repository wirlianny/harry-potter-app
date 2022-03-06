import { ModuleWithProviders, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { DiretorNaoEncontradorComponent } from './diretor-nao-encontrador/diretor-nao-encontrador.component';
import { DiretoresDetalheComponent } from './diretores-detalhe/diretores-detalhe.component';
import { DiretoresComponent } from './diretores.component';



const diretoresRoutes: Routes = [
  {
    path: 'diretores',
    component: DiretoresComponent
  },
  {
    path: 'diretores/:id',
    component: DiretoresDetalheComponent
  },
  {
    path: 'naoEncontrado',
    component: DiretorNaoEncontradorComponent
  },
];


@NgModule({
  imports: [RouterModule.forChild(diretoresRoutes)],
  exports: [RouterModule]
})
export class DiretoresRoutingModule { }
