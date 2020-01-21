import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrariSalleDiteComponent } from './orari-salle-dite.component';

describe('OrariSalleDiteComponent', () => {
  let component: OrariSalleDiteComponent;
  let fixture: ComponentFixture<OrariSalleDiteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrariSalleDiteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrariSalleDiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
