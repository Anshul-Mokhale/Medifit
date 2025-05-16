import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminbeautyComponent } from './adminbeauty.component';

describe('AdminbeautyComponent', () => {
  let component: AdminbeautyComponent;
  let fixture: ComponentFixture<AdminbeautyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminbeautyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminbeautyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
