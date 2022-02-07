import { TestBed } from '@angular/core/testing';

import { BallsService } from './balls.service';

xdescribe('BallsService', () => {
  let service: BallsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BallsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
