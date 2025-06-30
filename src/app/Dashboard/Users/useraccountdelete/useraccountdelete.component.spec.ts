import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UseraccountdeleteComponent } from './useraccountdelete.component';

describe('UseraccountdeleteComponent', () => {
  let component: UseraccountdeleteComponent;
  let fixture: ComponentFixture<UseraccountdeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UseraccountdeleteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UseraccountdeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
