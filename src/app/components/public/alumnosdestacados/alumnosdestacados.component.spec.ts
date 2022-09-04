import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlumnosdestacadosComponent } from './alumnosdestacados.component';

describe('AlumnosdestacadosComponent', () => {
  let component: AlumnosdestacadosComponent;
  let fixture: ComponentFixture<AlumnosdestacadosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlumnosdestacadosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlumnosdestacadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
