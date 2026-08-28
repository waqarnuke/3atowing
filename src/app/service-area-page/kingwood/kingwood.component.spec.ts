import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KingwoodComponent } from './kingwood.component';

describe('KingwoodComponent', () => {
  let component: KingwoodComponent;
  let fixture: ComponentFixture<KingwoodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KingwoodComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KingwoodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
