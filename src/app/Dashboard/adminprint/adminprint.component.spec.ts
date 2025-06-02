import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminprintComponent } from './adminprint.component';

describe('AdminprintComponent', () => {
  let component: AdminprintComponent;
  let fixture: ComponentFixture<AdminprintComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminprintComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminprintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
