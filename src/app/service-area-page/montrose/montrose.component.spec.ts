import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MontroseComponent } from './montrose.component';

describe('MontroseComponent', () => {
  let component: MontroseComponent;
  let fixture: ComponentFixture<MontroseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MontroseComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MontroseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
