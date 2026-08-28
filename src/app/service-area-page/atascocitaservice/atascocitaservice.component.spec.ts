import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtascocitaserviceComponent } from './atascocitaservice.component';

describe('AtascocitaserviceComponent', () => {
  let component: AtascocitaserviceComponent;
  let fixture: ComponentFixture<AtascocitaserviceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AtascocitaserviceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AtascocitaserviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
