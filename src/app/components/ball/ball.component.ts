import { Component, Input } from '@angular/core';
import { BallsService } from 'src/app/services/balls.service';

@Component({
  selector: 'app-ball',
  templateUrl: './ball.component.html',
  styleUrls: ['./ball.component.scss'],
})
export class BallComponent {
  @Input() number = 0;
  @Input() disabled = false;

  colors = [
    '',
    '#CA584F',
    '#F6F3DF',
    '#48A86A',
    '#F6E7E8',
    '#F6CD39',
    '#EDF5ED',
  ];
  ballColor = '';

  constructor(private ballsService: BallsService) {}

  calculateColor() {
    let colorNumber = this.number;
    if (colorNumber > 6) {
      while (colorNumber > 6) {
        colorNumber = colorNumber - 6;
      }
    }
    return colorNumber;
  }

  toggle() {
    if (this.number > 0 && !this.disabled) {
      this.ballsService.checkNumber(this.number);
    }
  }
}
