import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeliveryupdateprofileComponent } from './deliveryupdateprofile.component';

describe('DeliveryupdateprofileComponent', () => {
  let component: DeliveryupdateprofileComponent;
  let fixture: ComponentFixture<DeliveryupdateprofileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeliveryupdateprofileComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeliveryupdateprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
