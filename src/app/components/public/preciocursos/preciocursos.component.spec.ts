import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PreciocursosComponent } from './preciocursos.component';

describe('PreciocursosComponent', () => {
  let component: PreciocursosComponent;
  let fixture: ComponentFixture<PreciocursosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PreciocursosComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreciocursosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Funcionando', () => {
    expect(component).toBeTruthy();
  });
});
