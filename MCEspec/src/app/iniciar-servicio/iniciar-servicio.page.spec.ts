import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IniciarServicioPage } from './iniciar-servicio.page';

describe('IniciarServicioPage', () => {
  let component: IniciarServicioPage;
  let fixture: ComponentFixture<IniciarServicioPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IniciarServicioPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IniciarServicioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
