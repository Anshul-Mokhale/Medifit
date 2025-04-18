import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PainReliefComponent } from './pain-relief.component';

describe('PainReliefComponent', () => {
  let component: PainReliefComponent;
  let fixture: ComponentFixture<PainReliefComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PainReliefComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PainReliefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
