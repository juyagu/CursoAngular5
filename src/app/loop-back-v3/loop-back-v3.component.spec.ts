import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoopBackV3Component } from './loop-back-v3.component';

describe('LoopBackV3Component', () => {
  let component: LoopBackV3Component;
  let fixture: ComponentFixture<LoopBackV3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoopBackV3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoopBackV3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
