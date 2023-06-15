import { TestBed } from '@angular/core/testing';

import { ServicioContratacionService } from './servicio-contratacion.service';

describe('ServicioContratacionService', () => {
  let service: ServicioContratacionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicioContratacionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
