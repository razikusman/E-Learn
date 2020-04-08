import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OverallReportComponent } from './overall-report.component';

describe('OverallReportComponent', () => {
  let component: OverallReportComponent;
  let fixture: ComponentFixture<OverallReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OverallReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OverallReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
