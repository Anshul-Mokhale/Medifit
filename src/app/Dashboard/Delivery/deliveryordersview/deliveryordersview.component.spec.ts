import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeliveryordersviewComponent } from './deliveryordersview.component';

describe('DeliveryordersviewComponent', () => {
  let component: DeliveryordersviewComponent;
  let fixture: ComponentFixture<DeliveryordersviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeliveryordersviewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeliveryordersviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
