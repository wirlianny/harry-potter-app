import { TestBed } from '@angular/core/testing';

import { DiretoresServices } from './diretores.service';

describe('DiretoresService', () => {
  let service: DiretoresServices;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DiretoresServices);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
