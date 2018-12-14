import { TestBed } from '@angular/core/testing';

import { UpdateLoggerService } from './update-logger.service';

describe('UpdateLoggerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UpdateLoggerService = TestBed.get(UpdateLoggerService);
    expect(service).toBeTruthy();
  });
});
