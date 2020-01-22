/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { EkstraktService } from './Ekstrakt.service';

describe('Service: Ekstrakt', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EkstraktService]
    });
  });

  it('should ...', inject([EkstraktService], (service: EkstraktService) => {
    expect(service).toBeTruthy();
  }));
});
