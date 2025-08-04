import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeliveryordersComponent } from './deliveryorders.component';

describe('DeliveryordersComponent', () => {
  let component: DeliveryordersComponent;
  let fixture: ComponentFixture<DeliveryordersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeliveryordersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeliveryordersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
