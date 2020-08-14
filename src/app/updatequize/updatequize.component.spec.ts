import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatequizeComponent } from './updatequize.component';

describe('UpdatequizeComponent', () => {
  let component: UpdatequizeComponent;
  let fixture: ComponentFixture<UpdatequizeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdatequizeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatequizeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
