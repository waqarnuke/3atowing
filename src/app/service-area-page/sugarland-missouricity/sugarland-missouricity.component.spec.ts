import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SugarlandMissouricityComponent } from './sugarland-missouricity.component';

describe('SugarlandMissouricityComponent', () => {
  let component: SugarlandMissouricityComponent;
  let fixture: ComponentFixture<SugarlandMissouricityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SugarlandMissouricityComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SugarlandMissouricityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
