import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NumbersService {
  private numbersValues: number[] = [];
  numbers = new BehaviorSubject<number[]>(this.numbersValues);

  getNumbers() {
    return this.numbersValues;
  }

  private setNumbers() {
    this.numbersValues.sort((a, b) => a - b);
    this.numbers.next(this.numbersValues);
  }

  addNumber(number: number) {
    this.numbersValues.push(number);
    this.setNumbers();
  }

  substractNumber(number: number) {
    this.numbersValues = this.numbersValues.filter(
      (num) => num !== number
    );
    this.setNumbers();
  }
}
