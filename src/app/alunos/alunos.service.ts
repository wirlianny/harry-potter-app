import { Injectable } from '@angular/core';
import { Aluno } from './aluno';



@Injectable()
export class AlunosService {

  public alunos: Aluno[] = [
    {id: 1, nome: 'Aluno 01', email: 'aluno01email.com'},
    {id: 2, nome: 'Aluno 02', email: 'aluno02email.com'},
    {id: 3, nome: 'Aluno 03', email: 'aluno03email.com'}
  ];

  getAlunos(){
    return this.alunos;
  }

  getLista(id: number){
    for (let i=0; i<this.alunos.length; i++){
      let aluno = this.alunos[i];
      if (aluno.id == id){
        return aluno;
      }
    }
    return null;
  }

 constructor() { }

}
