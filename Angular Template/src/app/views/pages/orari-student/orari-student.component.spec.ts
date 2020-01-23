import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrariStudentComponent } from './orari-student.component';

describe('OrariStudentComponent', () => {
  let component: OrariStudentComponent;
  let fixture: ComponentFixture<OrariStudentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrariStudentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrariStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
