import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthentificationRoutingModule } from './authentification-routing.module';
import { AuthComponent } from './auth/auth.component';
import { ResetComponent } from './reset/reset.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AuthComponent,
    ResetComponent,
  ],
  imports: [
    CommonModule,
    AuthentificationRoutingModule,
    FormsModule,
    HttpClientModule
  ]
})
export class AuthentificationModule { }
