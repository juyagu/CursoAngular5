import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoopBackV2Component } from './loop-back-v2.component';

describe('LoopBackV2Component', () => {
  let component: LoopBackV2Component;
  let fixture: ComponentFixture<LoopBackV2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoopBackV2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoopBackV2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
