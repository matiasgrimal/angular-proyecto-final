import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PublicComponent } from './components/public/public.component';
import { PreciocursosComponent } from './components/public/preciocursos/preciocursos.component';
import { PrivateComponent } from './components/private/private.component';
import { AuthGuard } from './guards/auth.guard';


// import { AuthGuard } from '@auth0/auth0-angular';


const rutas: Routes = [
  { path: 'public', component: PublicComponent },
  { path: 'private', component: PrivateComponent, canActivate: [AuthGuard] },
  {
    path: 'public',
    component: PublicComponent,
    children: [
      { path: 'precio', component: PreciocursosComponent },
    ]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(rutas)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
