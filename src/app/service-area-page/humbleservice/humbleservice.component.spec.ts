import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HumbleserviceComponent } from './humbleservice.component';

describe('HumbleserviceComponent', () => {
  let component: HumbleserviceComponent;
  let fixture: ComponentFixture<HumbleserviceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HumbleserviceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HumbleserviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
