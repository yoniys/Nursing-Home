import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddRecwestComponent } from './add-recwest.component';

describe('AddRecwestComponent', () => {
  let component: AddRecwestComponent;
  let fixture: ComponentFixture<AddRecwestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddRecwestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddRecwestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
