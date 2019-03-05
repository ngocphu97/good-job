import { TestBed, inject } from '@angular/core/testing';

import { PublishDialogService } from './publish-dialog.service';

describe('PublishDialogService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PublishDialogService]
    });
  });

  it('should be created', inject([PublishDialogService], (service: PublishDialogService) => {
    expect(service).toBeTruthy();
  }));
});
