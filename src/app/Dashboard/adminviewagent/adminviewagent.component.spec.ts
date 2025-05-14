import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminviewagentComponent } from './adminviewagent.component';

describe('AdminviewagentComponent', () => {
  let component: AdminviewagentComponent;
  let fixture: ComponentFixture<AdminviewagentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminviewagentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminviewagentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
