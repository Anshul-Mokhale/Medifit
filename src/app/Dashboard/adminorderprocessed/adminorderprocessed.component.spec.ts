import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminorderprocessedComponent } from './adminorderprocessed.component';

describe('AdminorderprocessedComponent', () => {
  let component: AdminorderprocessedComponent;
  let fixture: ComponentFixture<AdminorderprocessedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminorderprocessedComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminorderprocessedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
