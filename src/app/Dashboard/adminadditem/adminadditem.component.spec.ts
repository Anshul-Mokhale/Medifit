import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminadditemComponent } from './adminadditem.component';

describe('AdminadditemComponent', () => {
  let component: AdminadditemComponent;
  let fixture: ComponentFixture<AdminadditemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminadditemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminadditemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
