import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MemorialserviceComponent } from './memorialservice.component';

describe('MemorialserviceComponent', () => {
  let component: MemorialserviceComponent;
  let fixture: ComponentFixture<MemorialserviceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MemorialserviceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MemorialserviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
