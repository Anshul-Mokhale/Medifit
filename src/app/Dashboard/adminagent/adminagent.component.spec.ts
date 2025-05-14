import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminagentComponent } from './adminagent.component';

describe('AdminagentComponent', () => {
  let component: AdminagentComponent;
  let fixture: ComponentFixture<AdminagentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminagentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminagentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
