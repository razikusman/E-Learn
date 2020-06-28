import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsTeachersComponent } from './details-teachers.component';

describe('DetailsTeachersComponent', () => {
  let component: DetailsTeachersComponent;
  let fixture: ComponentFixture<DetailsTeachersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailsTeachersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsTeachersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
