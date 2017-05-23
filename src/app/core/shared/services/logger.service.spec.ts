import { TestBed, inject } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';

import { LoggerService } from './logger.service';

describe('[Shared] LoggerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ LoggerService ],
      // schemas: [ NO_ERRORS_SCHEMA ]
    });
  });

  it('should create the service', inject([LoggerService], (service: LoggerService) => {
    expect(service).toBeTruthy();
  }));
});
