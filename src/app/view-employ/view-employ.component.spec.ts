import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewEmployComponent } from './view-employ.component';

describe('ViewEmployComponent', () => {
  let component: ViewEmployComponent;
  let fixture: ComponentFixture<ViewEmployComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewEmployComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewEmployComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
