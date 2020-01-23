import { TestBed } from '@angular/core/testing';

import { PedagogService } from './pedagog.service';

describe('PedagogService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PedagogService = TestBed.get(PedagogService);
    expect(service).toBeTruthy();
  });
});
