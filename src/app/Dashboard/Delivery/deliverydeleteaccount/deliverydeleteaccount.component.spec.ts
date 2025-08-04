import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeliverydeleteaccountComponent } from './deliverydeleteaccount.component';

describe('DeliverydeleteaccountComponent', () => {
  let component: DeliverydeleteaccountComponent;
  let fixture: ComponentFixture<DeliverydeleteaccountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeliverydeleteaccountComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeliverydeleteaccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
