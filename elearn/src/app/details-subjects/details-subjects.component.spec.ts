import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsSubjectsComponent } from './details-subjects.component';

describe('DetailsSubjectsComponent', () => {
  let component: DetailsSubjectsComponent;
  let fixture: ComponentFixture<DetailsSubjectsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailsSubjectsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsSubjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
