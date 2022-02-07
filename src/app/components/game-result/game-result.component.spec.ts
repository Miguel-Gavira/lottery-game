import { BallsService } from 'src/app/services/balls.service';
import { GameResultComponent } from './game-result.component';

describe('GameResultComponent', () => {
  const ballsService = new BallsService();
  const component = new GameResultComponent(ballsService);

  it('Test generateRandomInt method', function() {
    const randomNumber = component.generateRandomInt();
    expect(randomNumber).toBeLessThanOrEqual(10);
    expect(randomNumber).toBeGreaterThanOrEqual(1);
  })
});
