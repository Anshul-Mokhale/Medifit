import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserorderviewComponent } from './userorderview.component';

describe('UserorderviewComponent', () => {
  let component: UserorderviewComponent;
  let fixture: ComponentFixture<UserorderviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserorderviewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserorderviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
