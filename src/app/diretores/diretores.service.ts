import { Injectable } from '@angular/core';


@Injectable()
export class DiretoresServices {

  getDiretores(){
    return [
      {id: 1, nome: "Havenclaw"},
      {id: 2, nome: "Grifinória"}
    ];
  }

  getDiretor(id: number){
    let diretores = this.getDiretores();
    for (let i =0; i < diretores.length; i++){
      let diretor = diretores[i];
      if(diretor.id == id){
        return diretor;
      }
    }
    return null
  }
  constructor(){ }
}
