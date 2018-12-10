import { TestBed } from '@angular/core/testing';

import { AccesoADatosService } from './acceso-adatos.service';

describe('AccesoADatosService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AccesoADatosService = TestBed.get(AccesoADatosService);
    expect(service).toBeTruthy();
  });
});
