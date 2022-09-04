import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AlumnosDestacados } from '../modelos/alumnosdestacados';
import { environment } from '../../../../environments/environment';
import { map } from 'rxjs/internal/operators';

@Injectable({
  providedIn: 'root'
})
export class MockapiService {

  constructor(
    private httpClient: HttpClient
  ) { }

  getAlumnosDestacados(): Observable<AlumnosDestacados[]> {
    return this.httpClient.get(
      environment.baseURL + '/alumnosdestacados'
    ).pipe(map(response => response as AlumnosDestacados[]));

  }

}
