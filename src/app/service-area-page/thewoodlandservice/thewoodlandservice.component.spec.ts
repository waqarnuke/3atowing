import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThewoodlandserviceComponent } from './thewoodlandservice.component';

describe('ThewoodlandserviceComponent', () => {
  let component: ThewoodlandserviceComponent;
  let fixture: ComponentFixture<ThewoodlandserviceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ThewoodlandserviceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ThewoodlandserviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
