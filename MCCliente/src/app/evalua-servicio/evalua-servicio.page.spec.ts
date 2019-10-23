import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EvaluaServicioPage } from './evalua-servicio.page';

describe('EvaluaServicioPage', () => {
  let component: EvaluaServicioPage;
  let fixture: ComponentFixture<EvaluaServicioPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EvaluaServicioPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EvaluaServicioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
