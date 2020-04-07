import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudenDetailsComponent } from './studen-details.component';

describe('StudenDetailsComponent', () => {
  let component: StudenDetailsComponent;
  let fixture: ComponentFixture<StudenDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudenDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudenDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
