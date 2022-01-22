import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { ResetComponent } from './reset/reset.component';

const routes: Routes = [
  {path:'auth',component: AuthComponent },
  {path:'reset',component: ResetComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthentificationRoutingModule { }
