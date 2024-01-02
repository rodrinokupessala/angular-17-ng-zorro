import { TestBed } from '@angular/core/testing';

import { ValidationsGeneralService } from './validations-general.service';

describe('ValidationsGeneralService', () => {
  let service: ValidationsGeneralService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ValidationsGeneralService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
