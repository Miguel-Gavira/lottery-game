import { Component, Input } from '@angular/core';
import { NumbersService } from 'src/app/services/numbers.service';

@Component({
  selector: 'app-ball',
  templateUrl: './ball.component.html',
  styleUrls: ['./ball.component.scss']
})
export class BallComponent {
  @Input() number = 0;

  constructor(private numbersService: NumbersService) {}

  toggle() {
    let values = this.numbersService.getNumbers();
    if (!values.includes(this.number)) {
      this.numbersService.addNumber(this.number);
    } else {
      this.numbersService.substractNumber(this.number);
    }
    console.log(this.numbersService.getNumbers());
  }

}
