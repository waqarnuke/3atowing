import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WestchaseserviceComponent } from './westchaseservice.component';

describe('WestchaseserviceComponent', () => {
  let component: WestchaseserviceComponent;
  let fixture: ComponentFixture<WestchaseserviceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WestchaseserviceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WestchaseserviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
