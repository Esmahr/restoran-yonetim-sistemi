import { TestBed } from '@angular/core/testing';

import { RestoranYonetimiService } from './restoran-yonetimi.service';

describe('RestoranYonetimiService', () => {
  let service: RestoranYonetimiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RestoranYonetimiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
