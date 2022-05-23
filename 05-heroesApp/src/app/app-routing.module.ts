import { NgModule } from '@angular/core';
import { RouterModule, Routes, CanLoad } from '@angular/router';

import { ErrorPageComponent } from './shared/error-page/error-page.component';
import { AuthGuard } from './auth/guards/auth.guard';

const routes: Routes = [
  {
    path: 'auth',
    // Si se resulve la promesa lanzar el modulo indicado
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule),
  },
  {
    path: 'heroes',
    loadChildren: () => import('./heroes/heroes.module').then(m => m.HeroesModule),
    canLoad: [ AuthGuard ]
  },
  {
    path: '404',
    component: ErrorPageComponent
  }, {
    path: '**',
    // component: ErrorPageComponent,
    redirectTo: '404'
  }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
