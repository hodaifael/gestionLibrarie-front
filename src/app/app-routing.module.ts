import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './auth.guard';
const routes: Routes = [
  {
    path: 'login',
    loadChildren: './authentification/authentification.module'
  },
  {path : '', loadChildren: () => import('./components/components.module').then(m => m.ComponentsModule),
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }