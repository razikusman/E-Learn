import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentcreteComponent } from './parentcrete.component';

describe('ParentcreteComponent', () => {
  let component: ParentcreteComponent;
  let fixture: ComponentFixture<ParentcreteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParentcreteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParentcreteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
