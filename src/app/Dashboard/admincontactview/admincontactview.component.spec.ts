import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmincontactviewComponent } from './admincontactview.component';

describe('AdmincontactviewComponent', () => {
  let component: AdmincontactviewComponent;
  let fixture: ComponentFixture<AdmincontactviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdmincontactviewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdmincontactviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
