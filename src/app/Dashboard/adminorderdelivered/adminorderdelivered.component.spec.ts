import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminorderdeliveredComponent } from './adminorderdelivered.component';

describe('AdminorderdeliveredComponent', () => {
  let component: AdminorderdeliveredComponent;
  let fixture: ComponentFixture<AdminorderdeliveredComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminorderdeliveredComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminorderdeliveredComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
