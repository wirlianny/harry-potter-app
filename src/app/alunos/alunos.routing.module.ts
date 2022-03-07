import { AlunoFormComponent } from './aluno-form/aluno-form.component';
import { AlunoDetalheComponent } from './aluno-detalhe/aluno-detalhe.component';
import { AlunosComponent } from './alunos.component';
import { RouterModule } from '@angular/router';
import { NgModule } from "@angular/core";

const alunosRoutes = [
    {path: 'alunos', component: AlunosComponent},
    {path: 'novo', component: AlunoFormComponent},
    {path: 'alunos/:id', component: AlunoDetalheComponent},
    {path: 'alunos/:id/editar', component: AlunoFormComponent}
];

@NgModule({
  imports: [RouterModule.forChild(alunosRoutes)],
  exports: [RouterModule]
})

export class AlunosRoutingModule {}
