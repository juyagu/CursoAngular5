import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoopBackV4Component } from './loop-back-v4.component';

describe('LoopBackV4Component', () => {
  let component: LoopBackV4Component;
  let fixture: ComponentFixture<LoopBackV4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoopBackV4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoopBackV4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
