import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DivsComponent } from './divs.component';

describe('DivsComponent', () => {
  let component: DivsComponent;
  let fixture: ComponentFixture<DivsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DivsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DivsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
