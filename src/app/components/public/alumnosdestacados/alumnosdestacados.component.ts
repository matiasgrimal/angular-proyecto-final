import { Component, OnInit } from '@angular/core';
import { MockapiService } from '../servicios/mockapi.service';
import { AlumnosDestacados } from '../modelos/alumnosdestacados';

@Component({
  selector: 'app-alumnosdestacados',
  templateUrl: './alumnosdestacados.component.html',
  styleUrls: ['./alumnosdestacados.component.css']
})
export class AlumnosdestacadosComponent implements OnInit {

  public alumnosdestacados: AlumnosDestacados[];

  constructor(
    private MockapiService: MockapiService
  ) { }

  ngOnInit(): void {
    this.MockapiService.getAlumnosDestacados().subscribe(AlumnosDestacados => {
      this.alumnosdestacados = AlumnosDestacados
    });
  }

}
