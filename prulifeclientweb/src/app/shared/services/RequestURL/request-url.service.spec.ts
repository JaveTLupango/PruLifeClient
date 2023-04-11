import { TestBed } from '@angular/core/testing';

import { RequestURLService } from './request-url.service';

describe('RequestURLService', () => {
  let service: RequestURLService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RequestURLService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
