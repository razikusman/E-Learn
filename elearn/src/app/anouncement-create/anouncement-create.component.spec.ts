import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnouncementCreateComponent } from './anouncement-create.component';

describe('AnouncementCreateComponent', () => {
  let component: AnouncementCreateComponent;
  let fixture: ComponentFixture<AnouncementCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnouncementCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnouncementCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
