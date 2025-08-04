import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeliveryupdatepasswordComponent } from './deliveryupdatepassword.component';

describe('DeliveryupdatepasswordComponent', () => {
  let component: DeliveryupdatepasswordComponent;
  let fixture: ComponentFixture<DeliveryupdatepasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeliveryupdatepasswordComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeliveryupdatepasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
