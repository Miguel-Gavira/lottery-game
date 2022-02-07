import { Component } from '@angular/core';
import { BallsService } from 'src/app/services/balls.service';

@Component({
  selector: 'app-ball-selector',
  templateUrl: './ball-selector.component.html',
  styleUrls: ['./ball-selector.component.scss'],
})
export class BallSelectorComponent {
  balls: number[];

  constructor(private ballsService: BallsService) {
    this.balls = this.ballsService.allBalls;
  }

  clearSelection() {
    this.ballsService.resetBalls();
  }
}
