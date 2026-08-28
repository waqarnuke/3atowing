import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PorterserviceComponent } from './porterservice.component';

describe('PorterserviceComponent', () => {
  let component: PorterserviceComponent;
  let fixture: ComponentFixture<PorterserviceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PorterserviceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PorterserviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
