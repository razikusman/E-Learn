import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StdntHomeComponent } from './stdnt-home.component';

describe('StdntHomeComponent', () => {
  let component: StdntHomeComponent;
  let fixture: ComponentFixture<StdntHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StdntHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StdntHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
