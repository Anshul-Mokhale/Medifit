import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminmedikitComponent } from './adminmedikit.component';

describe('AdminmedikitComponent', () => {
  let component: AdminmedikitComponent;
  let fixture: ComponentFixture<AdminmedikitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminmedikitComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminmedikitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
