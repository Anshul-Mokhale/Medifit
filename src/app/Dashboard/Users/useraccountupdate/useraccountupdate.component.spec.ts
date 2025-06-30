import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UseraccountupdateComponent } from './useraccountupdate.component';

describe('UseraccountupdateComponent', () => {
  let component: UseraccountupdateComponent;
  let fixture: ComponentFixture<UseraccountupdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UseraccountupdateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UseraccountupdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
