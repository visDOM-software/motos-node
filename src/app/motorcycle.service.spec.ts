import { TestBed, inject } from '@angular/core/testing';

import { MotorcycleService } from './motorcycle.service';

describe('MotorcycleService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MotorcycleService]
    });
  });

  it('should be created', inject([MotorcycleService], (service: MotorcycleService) => {
    expect(service).toBeTruthy();
  }));
});
