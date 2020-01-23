import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrariPedagogComponent } from './orari-pedagog.component';

describe('OrariPedagogComponent', () => {
  let component: OrariPedagogComponent;
  let fixture: ComponentFixture<OrariPedagogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrariPedagogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrariPedagogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
