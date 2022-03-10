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
  quiz: any;



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
    if(option.alternative1){
      this.points+= 10;
      this.currentQuestion++;
      //this.correctAnswer++;
      this.getProgress();
    } /* else {
      this.currentQuestion++;
      this.getProgress();
    } */
    else if(option.alternative2){
      this.points+= 20;
      this.currentQuestion++;
      //this.correctAnswer++;
      this.getProgress();
    } /* else {
      this.currentQuestion++;
      this.getProgress();
    } */
    else if(option.alternative3){
      this.points+= 30;
      this.currentQuestion++;
      //this.correctAnswer++;
      this.getProgress();
    } /* else {
      this.currentQuestion++;
      this.getProgress();
    } */
    else if(option.alternative4){
      this.points+= 40;
      this.currentQuestion++;
      //this.correctAnswer++;
      this.getProgress();
    } /* else {
      this.currentQuestion++;
      this.getProgress();
    } */
    else if(option.alternative5){
      this.points+= 50;
      this.currentQuestion++;
      //this.correctAnswer++;
      this.getProgress();
    } /* else {
      this.currentQuestion++;
      this.getProgress();
    } */
    else if(option.alternative6){
      this.points+= 60;
      this.currentQuestion++;
      //this.correctAnswer++;
      this.getProgress();
    } /* else {
      this.currentQuestion++;
      this.getProgress();
    } */
    else if(option.alternative7){
      this.points+= 70;
      this.currentQuestion++;
      //this.correctAnswer++;
      this.getProgress();
    } /* else {
      this.currentQuestion++;
      this.getProgress();
    } */
    else if(option.alternative8){
      this.points+= 80;
      this.currentQuestion++;
      //this.correctAnswer++;
      this.getProgress();
    } /* else {
      this.currentQuestion++;
      this.getProgress();
    } */
    else if(option.alternative9){
      this.points+= 80;
      this.currentQuestion++;
      //this.correctAnswer++;
      this.getProgress();
    } /* else {
      this.currentQuestion++;
      this.getProgress();
    } */
    else if(option.alternative10){
      this.points+= 80;
      this.currentQuestion++;
      //this.correctAnswer++;
      this.getProgress();
    } /* else {
      this.currentQuestion++;
      this.getProgress();
    } */
    else if(option.alternative11){
      this.points+= 80;
      this.currentQuestion++;
      //this.correctAnswer++;
      this.getProgress();
    } /* else {
      this.currentQuestion++;
      this.getProgress();
    } */
    else if(option.alternative12){
      this.points+= 80;
      this.currentQuestion++;
      //this.correctAnswer++;
      this.getProgress();
    } /* else {
      this.currentQuestion++;
      this.getProgress();
    } */
    else if(option.alternative13){
      this.points+= 80;
      this.currentQuestion++;
      //this.correctAnswer++;
      this.getProgress();
    } /* else {
      this.currentQuestion++;
      this.getProgress();
    } */
    else if(option.alternative14){
      this.points+= 80;
      this.currentQuestion++;
      //this.correctAnswer++;
      this.getProgress();
    } /* else {
      this.currentQuestion++;
      this.getProgress();
    } */
    else if(option.alternative15){
      this.points+= 80;
      this.currentQuestion++;
      //this.correctAnswer++;
      this.getProgress();
    } /* else {
      this.currentQuestion++;
      this.getProgress();
    } */
    else if(option.alternative16){
      this.points+= 80;
      this.currentQuestion++;
      //this.correctAnswer++;
      this.getProgress();
    } else {
      this.currentQuestion++;
      this.getProgress();
    }


  }

  resetQuestoes(){
    this.getAllQuestions();
    //this.points = 0;
    this.currentQuestion=0;
    this.progress = "0";
  }

  getProgress(){
    this.progress = ((this.currentQuestion/this.questionList.length)*100).toString();
    return this.progress;
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

