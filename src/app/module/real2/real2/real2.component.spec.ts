import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Real2Component } from './real2.component';

describe('Real2Component', () => {
  let component: Real2Component;
  let fixture: ComponentFixture<Real2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Real2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Real2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
