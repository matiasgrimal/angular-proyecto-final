import { Component, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-private',
  templateUrl: './private.component.html',
  styleUrls: ['./private.component.css']
})
export class PrivateComponent implements OnInit {

  profesores = [
    'Diego Pereira', 'Carla Rodriguez', 'Marcos Gomez', 'Julian Perez', 'Alfonso Lopez'
  ]

  constructor(public auth: AuthService) { }

  ngOnInit() {
  }

}
