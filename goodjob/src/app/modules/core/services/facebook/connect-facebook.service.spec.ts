import { TestBed, inject } from '@angular/core/testing';

import { ConnectFacebookService } from './connect-facebook.service';

describe('ConnectFacebookService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ConnectFacebookService]
    });
  });

  it('should be created', inject([ConnectFacebookService], (service: ConnectFacebookService) => {
    expect(service).toBeTruthy();
  }));
});
