import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SugarlandMissouricityserviceComponent } from './sugarland-missouricityservice.component';

describe('SugarlandMissouricityserviceComponent', () => {
  let component: SugarlandMissouricityserviceComponent;
  let fixture: ComponentFixture<SugarlandMissouricityserviceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SugarlandMissouricityserviceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SugarlandMissouricityserviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
