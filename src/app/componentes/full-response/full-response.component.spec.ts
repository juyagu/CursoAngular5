import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FullResponseComponent } from './full-response.component';

describe('FullResponseComponent', () => {
  let component: FullResponseComponent;
  let fixture: ComponentFixture<FullResponseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FullResponseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FullResponseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
