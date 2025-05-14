import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmindeliveryComponent } from './admindelivery.component';

describe('AdmindeliveryComponent', () => {
  let component: AdmindeliveryComponent;
  let fixture: ComponentFixture<AdmindeliveryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdmindeliveryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdmindeliveryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
