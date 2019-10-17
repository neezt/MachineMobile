import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReporteProgresoPage } from './reporte-progreso.page';

describe('ReporteProgresoPage', () => {
  let component: ReporteProgresoPage;
  let fixture: ComponentFixture<ReporteProgresoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReporteProgresoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReporteProgresoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
