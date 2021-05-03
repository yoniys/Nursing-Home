import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MonthListComponent } from './month-list.component';

describe('MonthListComponent', () => {
  let component: MonthListComponent;
  let fixture: ComponentFixture<MonthListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MonthListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MonthListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
