import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmintransactionComponent } from './admintransaction.component';

describe('AdmintransactionComponent', () => {
  let component: AdmintransactionComponent;
  let fixture: ComponentFixture<AdmintransactionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdmintransactionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdmintransactionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
