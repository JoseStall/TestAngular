import { TestBed } from '@angular/core/testing';

import { GenericService } from './generic.service';

describe('GenericService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GenericService<any> = TestBed.get(GenericService);
    expect(service).toBeTruthy();
  });
});
