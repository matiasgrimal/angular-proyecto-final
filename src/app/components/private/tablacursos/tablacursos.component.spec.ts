import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TablacursosComponent } from './tablacursos.component';

describe('TablacursosComponent', () => {
  let component: TablacursosComponent;
  let fixture: ComponentFixture<TablacursosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TablacursosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TablacursosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
