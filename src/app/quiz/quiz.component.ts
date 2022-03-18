import { QuestoesService } from './../service/questoes.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'cf-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss'],
})
export class QuizComponent implements OnInit {
  public name: string = '';
  public questionList: any = [];
  public currentQuestion: number = 0;
  correctAnswer: number = 0;
  incorrectAnswer: number = 0;
  progress: string = '0';
  public points: number = 0;
  quizCompleted: boolean = false;
  isCollapsed: boolean;

  constructor(
    private questaoServidor: QuestoesService,
    private router: Router
  ) {
    this.isCollapsed = false;
  }

  ngOnInit(): void {
    this.name = localStorage.getItem('name')!;
    this.getAllQuestions();
  }

  getAllQuestions() {
    this.questaoServidor.getQuestionJson().subscribe((res) => {
      this.questionList = res.questions;
    });
  }

  proximaQuestao() {
    this.currentQuestion++;
  }

  questaoAnterior() {
    this.currentQuestion--;
  }

  answer(currentQno: number, option: any) {
    if (currentQno === this.questionList.length) {
      this.quizCompleted = true;
      this.resultadoCasa();
      this.isCollapsed = true;
    }

    if (option.alternative1) {
      this.points += 10;
      this.currentQuestion++;
      this.getProgress();
    }
    if (option.alternative2) {
      this.points += 25;
      this.currentQuestion++;
      this.getProgress();
    }
    if (option.alternative3) {
      this.points += 35;
      this.currentQuestion++;
      this.getProgress();
    }
    if (option.alternative4) {
      this.points += 45;
      this.currentQuestion++;
      this.getProgress();
    }
    if (option.alternative5) {
      this.points += 60;
      this.currentQuestion++;
      this.getProgress();
    }
    if (option.alternative6) {
      this.points += 75;
      this.currentQuestion++;

      this.getProgress();
    }
    if (option.alternative7) {
      this.points += 85;
      this.currentQuestion++;

      this.getProgress();
    }
    if (option.alternative8) {
      this.points += 100;
      this.currentQuestion++;
      this.getProgress();
    }
    if (option.alternative9) {
      this.points += 200;
      this.currentQuestion++;
      this.getProgress();
    }
    if (option.alternative10) {
      this.points += 250;
      this.currentQuestion++;
      this.getProgress();
    }
    if (option.alternative11) {
      this.points += 350;
      this.currentQuestion++;
      this.getProgress();
    }
    if (option.alternative12) {
      this.points += 450;
      this.currentQuestion++;
      this.getProgress();
    }
    if (option.alternative13) {
      this.points += 550;
      this.currentQuestion++;
      this.getProgress();
    }
    if (option.alternative14) {
      this.points += 650;
      this.currentQuestion++;
      this.getProgress();
    }
    if (option.alternative15) {
      this.points += 750;
      this.currentQuestion++;
      this.getProgress();
    }
    if (option.alternative16) {
      this.points += 850;
      this.currentQuestion++;
      this.getProgress();
    }
  }

  resetQuestoes() {
    this.getAllQuestions();
    this.points = 0;
    this.currentQuestion = 0;
    this.progress = '0';
  }

  getProgress() {
    this.progress = (
      (this.currentQuestion / this.questionList.length) *
      100
    ).toString();
    return this.progress;
  }

  resultadoCasa() {
    if (this.points <= 820) {
      (<HTMLImageElement>document.querySelector('img')).src =
        'https://senhoritadoestilo.files.wordpress.com/2015/09/5b638-brasao_grifinoria_brhp_by_alugok.jpg';
      return 'Grifinória!!';
    } else if (this.points > 820 && this.points <= 1000) {
      (<HTMLImageElement>document.querySelector('img')).src =
        'http://pm1.narvii.com/7350/2f76b6a123c86007ce077676c2d0bdb2aa7bb558r1-736-1308v2_uhq.jpg';
      return 'Sonserina!!';
    } else if (this.points > 1000 && this.points <= 1220) {
      (<HTMLImageElement>document.querySelector('img')).src =
        'https://http2.mlstatic.com/D_NQ_NP_720746-MLB43524083051_092020-O.jpg';
      return 'Lufa-lufa!!';
    } else if (this.points > 1220 && this.points <= 1495) {
      (<HTMLImageElement>document.querySelector('img')).src =
        'https://pbs.twimg.com/profile_images/1038240488954970112/YbPjAxYI_400x400.jpg';
      return 'Corvinal!!';
    } else {
      return null;
    }
  }

  goToPage(pageName: string): void {
    this.router.navigate([`${pageName}`]);
  }
}
