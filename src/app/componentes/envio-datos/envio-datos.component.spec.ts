import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnvioDatosComponent } from './envio-datos.component';

describe('EnvioDatosComponent', () => {
  let component: EnvioDatosComponent;
  let fixture: ComponentFixture<EnvioDatosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnvioDatosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnvioDatosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
