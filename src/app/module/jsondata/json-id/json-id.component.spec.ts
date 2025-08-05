import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JsonIdComponent } from './json-id.component';

describe('JsonIdComponent', () => {
  let component: JsonIdComponent;
  let fixture: ComponentFixture<JsonIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JsonIdComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JsonIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
