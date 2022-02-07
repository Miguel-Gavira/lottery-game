import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { BallsService } from 'src/app/services/balls.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent {
  balls: number[];
  selectedBalls = new Observable<number[]>();
  bet = 0;
  result = false;

  constructor(private ballsService: BallsService, private router: Router) {
    this.selectedBalls = this.ballsService.getBalls();
    this.balls = this.ballsService.allBalls;
  }

  setBet(event: number) {
    this.bet = event;
  }

  startGame() {
    this.result = true;
  }

}
