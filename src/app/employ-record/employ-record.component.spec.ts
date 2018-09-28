import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployRecordComponent } from './employ-record.component';

describe('EmployRecordComponent', () => {
  let component: EmployRecordComponent;
  let fixture: ComponentFixture<EmployRecordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployRecordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployRecordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
