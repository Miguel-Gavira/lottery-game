import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { NumbersService } from './services/numbers.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'lottery-game';
  minNumber = 1;
  maxNumber = 10;
  numbers: number[] = [];
  numbersValues = new Subject<number[]>();

  constructor(private numbersServices: NumbersService) {
    this.numbersValues = this.numbersServices.numbers;
  }

  ngOnInit(): void {
      this.initNumbers();
  }

  private initNumbers() {
    let index = this.minNumber;
    while (index <= this.maxNumber) {
      this.numbers.push(index);
      index++;
    }
  }
}
