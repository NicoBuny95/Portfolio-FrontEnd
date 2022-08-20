import { TestBed } from '@angular/core/testing';

import { ServicioExpService } from './servicio-exp.service';

describe('ServicioExpService', () => {
  let service: ServicioExpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicioExpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
