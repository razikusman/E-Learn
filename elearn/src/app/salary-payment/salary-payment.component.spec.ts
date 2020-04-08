import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalaryPaymentComponent } from './salary-payment.component';

describe('SalaryPaymentComponent', () => {
  let component: SalaryPaymentComponent;
  let fixture: ComponentFixture<SalaryPaymentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalaryPaymentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalaryPaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
