import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminhealthComponent } from './adminhealth.component';

describe('AdminhealthComponent', () => {
  let component: AdminhealthComponent;
  let fixture: ComponentFixture<AdminhealthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminhealthComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminhealthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
