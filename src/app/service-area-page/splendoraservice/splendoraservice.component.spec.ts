import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SplendoraserviceComponent } from './splendoraservice.component';

describe('SplendoraserviceComponent', () => {
  let component: SplendoraserviceComponent;
  let fixture: ComponentFixture<SplendoraserviceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SplendoraserviceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SplendoraserviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
