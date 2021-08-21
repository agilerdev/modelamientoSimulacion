import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tema7Component } from './tema7.component';

describe('Tema7Component', () => {
  let component: Tema7Component;
  let fixture: ComponentFixture<Tema7Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Tema7Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Tema7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
