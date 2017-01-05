/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { TshirtService } from './tshirt.service';

describe('TshirtService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TshirtService]
    });
  });

  it('should ...', inject([TshirtService], (service: TshirtService) => {
    expect(service).toBeTruthy();
  }));
});
