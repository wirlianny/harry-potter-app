import { QuestoesService } from './../service/questoes.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'cf-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss']
})
export class QuizComponent implements OnInit {
  public name: string="";
  public questionList: any = [];
  public currentQuestion: number = 0;
  correctAnswer: number = 0;
  incorrectAnswer: number = 0;
  progress: string = "0";
  public points: number = 0;
  quizCompleted: boolean = false;
  //public casas: Array = ["Grifinória", "Sonserina", "Corvinal", "Lufa-lufa"];




  constructor(private questaoServidor: QuestoesService) { }

  ngOnInit(): void {
    this.name = localStorage.getItem("name")!;
    this.getAllQuestions();
  }

  getAllQuestions(){
    this.questaoServidor.getQuestionJson().subscribe(res=>{
      this.questionList = res.questions;
    })

  }

  proximaQuestao(){
    this.currentQuestion++;
  }

  questaoAnterior(){
    this.currentQuestion--;
  }



  answer(currentQno: number, option: any){
    if(currentQno === this.questionList.length){
      this.quizCompleted = true;
      this.resultadoCasa();
    }

    if(option.alternative1){
      this.points+= 10;
      this.currentQuestion++;
      this.getProgress();
    }
    if(option.alternative2){
      this.points+= 25;
      this.currentQuestion++;
      this.getProgress();
    }
    if(option.alternative3){
      this.points+= 35;
      this.currentQuestion++;
      this.getProgress();
    }
    if(option.alternative4){
      this.points+= 45;
      this.currentQuestion++;
      this.getProgress();
    }
    if(option.alternative5){
      this.points+= 60;
      this.currentQuestion++;
      this.getProgress();
    }
    if(option.alternative6){
      this.points+= 75;
      this.currentQuestion++;

      this.getProgress();
    }
    if(option.alternative7){
      this.points+= 85;
      this.currentQuestion++;

      this.getProgress();
    }
    if(option.alternative8){
      this.points+= 100;
      this.currentQuestion++;
      this.getProgress();
    }
    if(option.alternative9){
      this.points+= 200;
      this.currentQuestion++;
      this.getProgress();
    }
    if(option.alternative10){
      this.points+= 250;
      this.currentQuestion++;
      this.getProgress();
    }
    if(option.alternative11){
      this.points+= 350;
      this.currentQuestion++;
      this.getProgress();
    }
    if(option.alternative12){
      this.points+= 450;
      this.currentQuestion++;
      this.getProgress();
    }
    if(option.alternative13){
      this.points+= 550;
      this.currentQuestion++;
      this.getProgress();
    }
    if(option.alternative14){
      this.points+= 650;
      this.currentQuestion++;
      this.getProgress();
    }
    if(option.alternative15){
      this.points+= 750;
      this.currentQuestion++;
      this.getProgress();
    }
    if(option.alternative16){
      this.points+= 850;
      this.currentQuestion++;
      this.getProgress();
    }


  }

  resetQuestoes(){
    this.getAllQuestions();
    this.points = 0;
    this.currentQuestion=0;
    this.progress = "0";
  }

  getProgress(){
    this.progress = ((this.currentQuestion/this.questionList.length)*100).toString();
    return this.progress;
  }

  resultadoCasa(){


    if(this.points <= 820){
     return "Grifinória"
    }

    else if (this.points <= 1000){
      return "Sonserina"
    }
    else if(this.points <= 1220) {
      return "Lufa-lufa"
    }
    else if (this.points <= 1495){
      return "Corvinal"
    } else {
      return null
    }
  }





  /* check(){
    var c = 0;
    var q1 = this.quiz.nativeElement.question1.value
    var q2 = this.quiz.nativeElement.question2.value
    var q3 = this.quiz.nativeElement.question3.value
    var q4 = this.quiz.nativeElement.question4.value

    var result = document.getElementById('result');
    var quiz = document.getElementById("quiz");

    if(q1==1) {c++}
    if (q1==2) {c+=5}
    if (q1==3) {c+=5}
    if (q1==4) {c+=5}

    quiz!.style.display = "none"

    if(c <= 3){
      result!.textContent = "Sua casa é a Grifinória"
    }
    if(c <= 8) {
      result!.textContent="Sua casa é Corvinal"
    }
    if(c <= 13) {
      result!.textContent="Sua casa é Sonserina"
    }
    if(c <= 18) {
      result!.textContent="Sua casa é Lufa-lufa"
    } else {
      result!.textContent="Tente novamente ano que vem"
    }
  } */

}

