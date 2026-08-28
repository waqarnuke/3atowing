import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SplendoraComponent } from './splendora.component';

describe('SplendoraComponent', () => {
  let component: SplendoraComponent;
  let fixture: ComponentFixture<SplendoraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SplendoraComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SplendoraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
