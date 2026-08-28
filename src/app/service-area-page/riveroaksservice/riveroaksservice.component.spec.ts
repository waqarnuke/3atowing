import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RiveroaksserviceComponent } from './riveroaksservice.component';

describe('RiveroaksserviceComponent', () => {
  let component: RiveroaksserviceComponent;
  let fixture: ComponentFixture<RiveroaksserviceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RiveroaksserviceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RiveroaksserviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
