import { TestBed } from '@angular/core/testing';

import { RouteGuardService } from './route-guard.service';
import { RouterModule, Router } from '@angular/router';

class RouterMock {
  navigate() { return true; }
}

describe('RouteGuardService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [RouterModule],
    providers: [RouteGuardService,
      { provide: Router, useClass: RouterMock }]
  }));

  it('should be created', () => {
    const service: RouteGuardService = TestBed.get(RouteGuardService);
    expect(service).toBeTruthy();
  });
});
