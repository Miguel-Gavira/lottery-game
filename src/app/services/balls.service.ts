import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BallsService {
  minNumber = 1;
  maxNumber = 10;
  allBalls: number[] = [];
  private ballsValues: number[] = [];
  balls = new BehaviorSubject<number[]>(this.ballsValues);

  constructor()  {
    this.initBalls();
  }

  private initBalls() {
    let index = this.minNumber;
    while (index <= this.maxNumber) {
      this.allBalls.push(index);
      index++;
    }
  }

  getBalls() {
    return this.balls.asObservable();
  }

  checkNumber(number: number) {
    if (!this.ballsValues.includes(number)) {
      this.addNumber(number);
    } else {
      this.subtractNumber(number);
    }
  }

  resetBalls() {
    this.ballsValues = [];
    this.setBalls();
  }

  private addNumber(number: number) {
    this.ballsValues.push(number);
    this.setBalls();
  }

  private subtractNumber(number: number) {
    this.ballsValues = this.ballsValues.filter((num) => num !== number);
    this.setBalls();
  }

  private setBalls() {
    this.ballsValues.sort((a, b) => a - b);
    this.balls.next(this.ballsValues);
  }
}
