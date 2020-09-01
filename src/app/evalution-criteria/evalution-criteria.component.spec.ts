import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EvalutionCriteriaComponent } from './evalution-criteria.component';

describe('EvalutionCriteriaComponent', () => {
  let component: EvalutionCriteriaComponent;
  let fixture: ComponentFixture<EvalutionCriteriaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EvalutionCriteriaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EvalutionCriteriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
