import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EspecialistaSitioPage } from './especialista-sitio.page';

describe('EspecialistaSitioPage', () => {
  let component: EspecialistaSitioPage;
  let fixture: ComponentFixture<EspecialistaSitioPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EspecialistaSitioPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EspecialistaSitioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
