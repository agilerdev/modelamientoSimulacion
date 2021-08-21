import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tema6Component } from './tema6.component';

describe('Tema6Component', () => {
  let component: Tema6Component;
  let fixture: ComponentFixture<Tema6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Tema6Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Tema6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
