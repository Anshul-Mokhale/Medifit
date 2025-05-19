import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminordercancledComponent } from './adminordercancled.component';

describe('AdminordercancledComponent', () => {
  let component: AdminordercancledComponent;
  let fixture: ComponentFixture<AdminordercancledComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminordercancledComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminordercancledComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
