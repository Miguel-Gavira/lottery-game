import { BallsService } from 'src/app/services/balls.service';
import { BallComponent } from './ball.component';

describe('BallComponent', () => {
  const ballsService = new BallsService();
  const component = new BallComponent(ballsService);

  describe('test calculateColor method', function () {
    it('calculate color for number 70', function() {
      component.number = 70;
      const color = component.calculateColor();
      expect(color).toBeLessThanOrEqual(6);
      expect(color).toBeGreaterThanOrEqual(1);
    })
    it('calculate color for number 6', function() {
      component.number = 6;
      const color = component.calculateColor();
      expect(color).toBeLessThanOrEqual(6);
      expect(color).toBeGreaterThanOrEqual(1);
    })  });
});
