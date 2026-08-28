import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KingwoodserviceComponent } from './kingwoodservice.component';

describe('KingwoodserviceComponent', () => {
  let component: KingwoodserviceComponent;
  let fixture: ComponentFixture<KingwoodserviceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KingwoodserviceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KingwoodserviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
