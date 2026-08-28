import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HumbleComponent } from './humble.component';

describe('HumbleComponent', () => {
  let component: HumbleComponent;
  let fixture: ComponentFixture<HumbleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HumbleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HumbleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
