import { TestBed } from '@angular/core/testing';

import { EmployServiceService } from './employ-service.service';

describe('EmployServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EmployServiceService = TestBed.get(EmployServiceService);
    expect(service).toBeTruthy();
  });
});
