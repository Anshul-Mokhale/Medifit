import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminviewitemComponent } from './adminviewitem.component';

describe('AdminviewitemComponent', () => {
  let component: AdminviewitemComponent;
  let fixture: ComponentFixture<AdminviewitemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminviewitemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminviewitemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
