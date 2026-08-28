import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MontroseserviceComponent } from './montroseservice.component';

describe('MontroseserviceComponent', () => {
  let component: MontroseserviceComponent;
  let fixture: ComponentFixture<MontroseserviceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MontroseserviceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MontroseserviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
