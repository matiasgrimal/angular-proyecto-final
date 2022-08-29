import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PublicComponent } from './components/public/public.component';
import { PreciocursosComponent } from './components/public/preciocursos/preciocursos.component';
import { PrivateComponent } from './components/private/private.component';
import { AuthGuard } from './guards/auth.guard';
import { CommonModule } from '@angular/common';


// import { AuthGuard } from '@auth0/auth0-angular';


const rutas: Routes = [
  { path: 'public', component: PublicComponent },
  {
    path: 'private',
    loadChildren: () => import('./components/public/contact-reactive/contact-reactive.module').then(m => m.ContactReactiveModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'public',
    component: PublicComponent,
    children: [
      { path: 'precio', component: PreciocursosComponent },
    ]
  },

];

@NgModule({
  declarations: [],
  imports: [CommonModule,
    RouterModule.forRoot(rutas)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
