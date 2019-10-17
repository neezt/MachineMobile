import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicioRechazadoPage } from './servicio-rechazado.page';

describe('ServicioRechazadoPage', () => {
  let component: ServicioRechazadoPage;
  let fixture: ComponentFixture<ServicioRechazadoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServicioRechazadoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicioRechazadoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
