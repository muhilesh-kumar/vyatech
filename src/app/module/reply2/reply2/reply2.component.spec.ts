import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Reply2Component } from './reply2.component';

describe('Reply2Component', () => {
  let component: Reply2Component;
  let fixture: ComponentFixture<Reply2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Reply2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Reply2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
