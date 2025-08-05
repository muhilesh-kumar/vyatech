import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Housing2Component } from './housing2.component';

describe('Housing2Component', () => {
  let component: Housing2Component;
  let fixture: ComponentFixture<Housing2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Housing2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Housing2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
