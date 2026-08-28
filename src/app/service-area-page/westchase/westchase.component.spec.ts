import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WestchaseComponent } from './westchase.component';

describe('WestchaseComponent', () => {
  let component: WestchaseComponent;
  let fixture: ComponentFixture<WestchaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WestchaseComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WestchaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
