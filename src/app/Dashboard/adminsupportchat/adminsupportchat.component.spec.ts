import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminsupportchatComponent } from './adminsupportchat.component';

describe('AdminsupportchatComponent', () => {
  let component: AdminsupportchatComponent;
  let fixture: ComponentFixture<AdminsupportchatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminsupportchatComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminsupportchatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
