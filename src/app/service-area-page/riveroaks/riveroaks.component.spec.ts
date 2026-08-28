import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RiveroaksComponent } from './riveroaks.component';

describe('RiveroaksComponent', () => {
  let component: RiveroaksComponent;
  let fixture: ComponentFixture<RiveroaksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RiveroaksComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RiveroaksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
