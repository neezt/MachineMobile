import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicioTerminadoPage } from './servicio-terminado.page';

describe('ServicioTerminadoPage', () => {
  let component: ServicioTerminadoPage;
  let fixture: ComponentFixture<ServicioTerminadoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServicioTerminadoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicioTerminadoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
