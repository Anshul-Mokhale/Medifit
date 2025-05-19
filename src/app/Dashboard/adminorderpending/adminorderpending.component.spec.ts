import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminorderpendingComponent } from './adminorderpending.component';

describe('AdminorderpendingComponent', () => {
  let component: AdminorderpendingComponent;
  let fixture: ComponentFixture<AdminorderpendingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminorderpendingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminorderpendingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
