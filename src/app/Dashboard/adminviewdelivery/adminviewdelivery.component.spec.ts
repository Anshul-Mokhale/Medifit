import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminviewdeliveryComponent } from './adminviewdelivery.component';

describe('AdminviewdeliveryComponent', () => {
  let component: AdminviewdeliveryComponent;
  let fixture: ComponentFixture<AdminviewdeliveryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminviewdeliveryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminviewdeliveryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
