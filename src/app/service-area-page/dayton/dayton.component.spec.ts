import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DaytonComponent } from './dayton.component';

describe('DaytonComponent', () => {
  let component: DaytonComponent;
  let fixture: ComponentFixture<DaytonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DaytonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DaytonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
