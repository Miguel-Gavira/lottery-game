import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BallComponent } from './components/ball/ball.component';
import { BallSelectorComponent } from './components/ball-selector/ball-selector.component';
import { LayoutComponent } from './components/layout/layout.component';
import { GameResultComponent } from './components/game-result/game-result.component';
import { BetSlipComponent } from './components/bet-slip/bet-slip.component';

@NgModule({
  declarations: [
    AppComponent,
    BallComponent,
    BallSelectorComponent,
    LayoutComponent,
    GameResultComponent,
    BetSlipComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
