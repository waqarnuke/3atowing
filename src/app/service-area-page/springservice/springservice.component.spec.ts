import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpringserviceComponent } from './springservice.component';

describe('SpringserviceComponent', () => {
  let component: SpringserviceComponent;
  let fixture: ComponentFixture<SpringserviceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SpringserviceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpringserviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
