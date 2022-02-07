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

  constructor(private ballsService: BallsService) {}

  toggle() {
    if (this.number > 0 && !this.disabled) {
      this.ballsService.checkNumber(this.number);
    }
  }

  numberToString(): string {
    return String.fromCharCode(this.number + 96);
  }
}
