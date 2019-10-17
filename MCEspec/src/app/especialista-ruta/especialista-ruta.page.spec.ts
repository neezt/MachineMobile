import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EspecialistaRutaPage } from './especialista-ruta.page';

describe('EspecialistaRutaPage', () => {
  let component: EspecialistaRutaPage;
  let fixture: ComponentFixture<EspecialistaRutaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EspecialistaRutaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EspecialistaRutaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
