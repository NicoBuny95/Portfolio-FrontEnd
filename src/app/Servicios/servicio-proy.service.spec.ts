import { TestBed } from '@angular/core/testing';

import { ServicioProyService } from './servicio-proy.service';

describe('ServicioProyService', () => {
  let service: ServicioProyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicioProyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
