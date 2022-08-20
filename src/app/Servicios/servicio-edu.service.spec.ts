import { TestBed } from '@angular/core/testing';

import { ServicioEduService } from './servicio-edu.service';

describe('ServicioEduService', () => {
  let service: ServicioEduService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicioEduService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
