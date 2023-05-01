import { TestBed } from '@angular/core/testing';

import { UserConcentService } from './user-concent.service';

describe('UserConcentService', () => {
  let service: UserConcentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserConcentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
