import { Injectable } from '@angular/core';


@Injectable()
export class DiretoresServices {

  getDiretores(){
    return [
      {id: 1, nome: 'Rowena Ravenclaw', casa: 'Fundadora da casa Corvinal', descricao: 'Rowena Ravenclaw era uma bruxa Escocesa e uma dos quatro fundadores da Escola de Magia e Bruxaria de Hogwarts. Ela se destacou por sua inteligência e criatividade. Ravenclaw morreu em algum momento do século XI, depois que ela ficou fatalmente doente. Diz a lenda que o coração partido é a causa - porque sua filha, Helena, fugiu com seu diadema. O retrato de Rowena permanece em Hogwarts.'},
      {id: 2, nome: 'Godrico Gryffindor', casa: 'Fundador da casa Grifinória', descricao: 'Godrico Gryffindor era um bruxo Inglês e um dos quatro fundadores da Escola de Magia e Bruxaria de Hogwarts. Ele era um grande amigo de Salazar Slytherin, mas se opôs quando o bruxo pensou que não deveriam aceitar estudantes Nascidos-Trouxas em Hogwarts. Não se sabe quando ele morreu. Em sua homenagem, o local de nascimento de Gryffindor ficou conhecido como Godric`s Hollow. O retrato de Godrico Gryffindor ainda permanece em Hogwarts.'},
      {id: 3, nome: 'Helga Hufflepuff', casa: 'Fundadora da casa Lufa-lufa', descricao: 'Helga Hufflepuff era uma bruxa Galesa e uma dos quatro fundadores da Escola de Magia e Bruxaria de Hogwarts. Enquanto os outros fundadores optaram por terem alunos especiais, ela os aceitou sem preferência, mas os alunos de sua casa são descritos como leais e trabalhadores. O retrato de Helga permanece em Hogwarts.'},
      {id: 4, nome: 'Salazar Sonserina', casa: 'Fundador da casa Sonserina', descricao: 'Salazar Sonserina foi um bruxo de sangue puro, conhecido por sua astúcia e determinação. Ele era considerado um dos maiores magos da época, respectivamente como um Ofidioglota e como um Legilimente habilidoso. Sonserina foi um dos quatro fundadores da Escola de Magia e Bruxaria de Hogwarts, juntamente com Godric Grifinória, Helga Hufflepuff e Rowena Ravenclaw.'}
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

