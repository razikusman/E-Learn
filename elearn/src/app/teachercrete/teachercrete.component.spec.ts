import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeachercreteComponent } from './teachercrete.component';

describe('TeachercreteComponent', () => {
  let component: TeachercreteComponent;
  let fixture: ComponentFixture<TeachercreteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeachercreteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeachercreteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
