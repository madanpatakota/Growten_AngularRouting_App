import { TestBed } from '@angular/core/testing';
import { CanDeactivateFn } from '@angular/router';

import { candeacivateGuard } from './candeacivate.guard';

describe('candeacivateGuard', () => {
  const executeGuard: CanDeactivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => candeacivateGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
