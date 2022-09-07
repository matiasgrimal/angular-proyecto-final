import { Component, OnInit } from '@angular/core';
import { NgRedux } from '@angular-redux/store';
import { IAppState } from '../../../store';
import { INCREMENT } from 'src/app/actions';

@Component({
  selector: 'app-contador-monitor',
  templateUrl: './contador-monitor.component.html',
  styleUrls: ['./contador-monitor.component.css']
})
export class ContadorMonitorComponent implements OnInit {

  counter: number;

  constructor(private ngRedux: NgRedux<IAppState>) {
    this.ngRedux.subscribe(() => {
      const store = this.ngRedux.getState();
      this.counter = store.counter;
    });
  }

  ngOnInit(): void {
  }

  incrementaContador() {
    this.ngRedux.dispatch({ type: INCREMENT });
  }

}
