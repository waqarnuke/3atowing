import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThewoodlandComponent } from './thewoodland.component';

describe('ThewoodlandComponent', () => {
  let component: ThewoodlandComponent;
  let fixture: ComponentFixture<ThewoodlandComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ThewoodlandComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ThewoodlandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
