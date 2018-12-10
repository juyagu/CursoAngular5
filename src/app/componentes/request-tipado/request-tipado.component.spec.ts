import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestTipadoComponent } from './request-tipado.component';

describe('RequestTipadoComponent', () => {
  let component: RequestTipadoComponent;
  let fixture: ComponentFixture<RequestTipadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequestTipadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestTipadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
