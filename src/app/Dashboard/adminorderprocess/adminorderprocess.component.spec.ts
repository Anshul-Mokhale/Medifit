import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminorderprocessComponent } from './adminorderprocess.component';

describe('AdminorderprocessComponent', () => {
  let component: AdminorderprocessComponent;
  let fixture: ComponentFixture<AdminorderprocessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminorderprocessComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminorderprocessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
