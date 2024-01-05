import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EatCardComponent } from './eat-card.component';

describe('EatCardComponent', () => {
  let component: EatCardComponent;
  let fixture: ComponentFixture<EatCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EatCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EatCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
