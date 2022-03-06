import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import { LoginComponent } from './account/login/login.component';
import { CreateAccountComponent } from './account/create-account/create-account.component';
import { HomeComponent } from './layout/home/home.component';
import { AuthenticationComponent } from './layout/authentication/authentication.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { AulasDetalheComponent } from './aulas-detalhe/aulas-detalhe.component';
import { CommonModule } from '@angular/common';
import { DiretoresDetalheComponent } from './diretores-detalhe/diretores-detalhe.component';
import { DiretoresComponent } from './diretores/diretores.component';
import { DiretoresServices } from './diretores/diretores.service';
import { DiretorNaoEncontradorComponent } from './diretor-nao-encontrador/diretor-nao-encontrador.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CreateAccountComponent,
    HomeComponent,
    AuthenticationComponent,
    DiretoresDetalheComponent,
    AulasDetalheComponent,
    DiretoresComponent,
    DiretorNaoEncontradorComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    CommonModule,


  ],
  providers: [DiretoresServices],
  bootstrap: [AppComponent],

  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],

})
export class AppModule { }
