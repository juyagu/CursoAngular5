import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BorrarDatosComponent } from './borrar-datos.component';

describe('BorrarDatosComponent', () => {
  let component: BorrarDatosComponent;
  let fixture: ComponentFixture<BorrarDatosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BorrarDatosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BorrarDatosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
