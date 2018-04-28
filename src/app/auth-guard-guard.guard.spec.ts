import { TestBed, async, inject } from '@angular/core/testing';

import { AuthGuardGuardGuard } from './auth-guard-guard.guard';

describe('AuthGuardGuardGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthGuardGuardGuard]
    });
  });

  it('should ...', inject([AuthGuardGuardGuard], (guard: AuthGuardGuardGuard) => {
    expect(guard).toBeTruthy();
  }));
});
