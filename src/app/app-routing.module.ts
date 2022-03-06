import { ModuleWithProviders, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { CreateAccountComponent } from './account/create-account/create-account.component';
import { LoginComponent } from './account/login/login.component';
import { AuthGuard } from './account/shared/auth.guard';
import { AulasDetalheComponent } from './aulas-detalhe/aulas-detalhe.component';
import { AulasComponent } from './aulas/aulas.component';
import { DiretoresDetalheComponent } from './diretores-detalhe/diretores-detalhe.component';
import { DiretoresComponent } from './diretores/diretores.component';
import { HomepageComponent } from './homepage/homepage.component';
import { AuthenticationComponent } from './layout/authentication/authentication.component';
import { HomeComponent } from './layout/home/home.component';
import { QuizComponent } from './quiz/quiz.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'diretores',
    component: DiretoresComponent
  },
  {
    path: 'diretores/:id',
    component: DiretoresDetalheComponent
  },
  {
    path: 'aulas',
    component: AulasComponent
  },
  {
    path: 'aulas/:id',
    component: AulasDetalheComponent
  },
  {
    path: 'homepage',
    component: HomepageComponent
  },
  {
    path: 'quiz',
    component: QuizComponent
  },


  { path: '', redirectTo: 'dashboard', pathMatch: 'full'},

  {
    path: '',
    component: AuthenticationComponent,
    children: [
      {
        path: '', redirectTo: 'login', pathMatch: 'full'
      },
      {
        path: 'login', component: LoginComponent
      },
      {
        path: 'create-account', component: CreateAccountComponent
      }
    ]
  }


];



@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
