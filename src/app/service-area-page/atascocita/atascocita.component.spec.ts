import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtascocitaComponent } from './atascocita.component';

describe('AtascocitaComponent', () => {
  let component: AtascocitaComponent;
  let fixture: ComponentFixture<AtascocitaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AtascocitaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AtascocitaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
