import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Auth0
import { AuthModule } from '@auth0/auth0-angular';
import { PublicComponent } from './components/public/public.component';
import { PrivateComponent } from './components/private/private.component';
import { TablaAlumnosComponent } from './components/public/tabla-alumnos/tabla-alumnos.component';
import { PreciocursosComponent } from './components/public/preciocursos/preciocursos.component';
import { TablacursosComponent } from './components/private/tablacursos/tablacursos.component';
import { MiDirectivaDirective } from './components/private/directiva/mi-directiva.directive';
import { AlumnosdestacadosComponent } from './components/public/alumnosdestacados/alumnosdestacados.component';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    AppComponent,
    PublicComponent,
    PrivateComponent,
    TablaAlumnosComponent,
    PreciocursosComponent,
    TablacursosComponent,
    MiDirectivaDirective,
    AlumnosdestacadosComponent,
    AlumnosdestacadosComponent

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    // Auth0
    AuthModule.forRoot({
      domain: 'dev-7cd0ipsj.us.auth0.com',
      clientId: 'Gomh0Q3F2ZfK5RNAIYDgyEvnc9TJqak7',
      // Opcionales
      cacheLocation: 'localstorage',
      useRefreshTokens: true,
      PreciocursosComponent,
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
