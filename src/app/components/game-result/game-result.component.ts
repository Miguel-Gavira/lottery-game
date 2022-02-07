import { Component, Input, OnInit } from '@angular/core';
import { BallsService } from 'src/app/services/balls.service';

@Component({
  selector: 'app-game-result',
  templateUrl: './game-result.component.html',
  styleUrls: ['./game-result.component.scss'],
})
export class GameResultComponent implements OnInit {
  @Input() selectedBalls: number[] = [];
  @Input() bet: number = 0;

  winningBall = 0;

  constructor(private ballsService: BallsService) {}

  ngOnInit(): void {
    this.initWinningBall();
  }

  initWinningBall() {
    this.winningBall = this.generateRandomInt();
  }

  generateRandomInt() {
    return Math.floor(
      Math.random() *
        (this.ballsService.maxNumber + 1 - this.ballsService.minNumber) +
        this.ballsService.minNumber
    );
  }
}
