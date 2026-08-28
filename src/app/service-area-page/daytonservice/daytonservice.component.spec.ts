import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DaytonserviceComponent } from './daytonservice.component';

describe('DaytonserviceComponent', () => {
  let component: DaytonserviceComponent;
  let fixture: ComponentFixture<DaytonserviceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DaytonserviceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DaytonserviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
