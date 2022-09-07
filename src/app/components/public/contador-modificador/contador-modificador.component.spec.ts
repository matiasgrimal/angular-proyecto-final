import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContadorModificadorComponent } from './contador-modificador.component';

describe('ContadorModificadorComponent', () => {
  let component: ContadorModificadorComponent;
  let fixture: ComponentFixture<ContadorModificadorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContadorModificadorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContadorModificadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
