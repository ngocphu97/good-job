import { TestBed, inject } from '@angular/core/testing';

import { WellcomeService } from './wellcome.service';

describe('WellcomeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WellcomeService]
    });
  });

  it('should be created', inject([WellcomeService], (service: WellcomeService) => {
    expect(service).toBeTruthy();
  }));
});
