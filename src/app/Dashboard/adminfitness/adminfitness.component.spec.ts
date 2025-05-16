import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminfitnessComponent } from './adminfitness.component';

describe('AdminfitnessComponent', () => {
  let component: AdminfitnessComponent;
  let fixture: ComponentFixture<AdminfitnessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminfitnessComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminfitnessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
