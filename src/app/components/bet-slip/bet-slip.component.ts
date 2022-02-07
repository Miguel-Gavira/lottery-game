import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-bet-slip',
  templateUrl: './bet-slip.component.html',
  styleUrls: ['./bet-slip.component.scss'],
})
export class BetSlipComponent {
  @Input() selectedBalls: number[] = [];
  @Input() balls: number[] = [];
  @Output() startGame = new EventEmitter<boolean>();
  @Output() betAmount = new EventEmitter<number>();

  betControl = new FormControl(0);
  bet = 0;
  warningMinimumBet = false;
  warningNoBallSelected = false;

  updateBet() {
    this.bet = this.betControl.value;
    this.warningMinimumBet = false;
    if (
      this.selectedBalls.length > 0 &&
      this.bet * this.selectedBalls.length < 5
    ) {
      this.bet = 0;
      this.warningMinimumBet = true;
    }
    this.betAmount.emit(this.bet);
  }

  start() {
    this.startGame.emit(true);
  }
}
