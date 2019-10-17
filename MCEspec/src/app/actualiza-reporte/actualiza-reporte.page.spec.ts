import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualizaReportePage } from './actualiza-reporte.page';

describe('ActualizaReportePage', () => {
  let component: ActualizaReportePage;
  let fixture: ComponentFixture<ActualizaReportePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActualizaReportePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActualizaReportePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
