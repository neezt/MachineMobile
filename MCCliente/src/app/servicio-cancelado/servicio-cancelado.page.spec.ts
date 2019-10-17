import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicioCanceladoPage } from './servicio-cancelado.page';

describe('ServicioCanceladoPage', () => {
  let component: ServicioCanceladoPage;
  let fixture: ComponentFixture<ServicioCanceladoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServicioCanceladoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicioCanceladoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
