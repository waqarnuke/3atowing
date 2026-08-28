import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HuffmanserviceComponent } from './huffmanservice.component';

describe('HuffmanserviceComponent', () => {
  let component: HuffmanserviceComponent;
  let fixture: ComponentFixture<HuffmanserviceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HuffmanserviceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HuffmanserviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
