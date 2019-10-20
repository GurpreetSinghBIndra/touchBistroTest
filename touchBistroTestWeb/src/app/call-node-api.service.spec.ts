import { TestBed } from '@angular/core/testing';

import { CallNodeAPIService } from './call-node-api.service';

describe('CallNodeAPIService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CallNodeAPIService = TestBed.get(CallNodeAPIService);
    expect(service).toBeTruthy();
  });
});
