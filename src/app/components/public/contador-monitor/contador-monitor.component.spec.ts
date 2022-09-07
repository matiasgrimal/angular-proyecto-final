import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContadorMonitorComponent } from './contador-monitor.component';

describe('ContadorMonitorComponent', () => {
  let component: ContadorMonitorComponent;
  let fixture: ComponentFixture<ContadorMonitorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContadorMonitorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContadorMonitorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
