import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthResetPasswordComponent } from './auth-reset-password.component';
import { AuthResetPasswordRoutingModule } from './auth-reset-password-routing.module';

@NgModule({
  declarations: [AuthResetPasswordComponent],
  imports: [
    CommonModule,
    AuthResetPasswordRoutingModule
  ]
})
export class AuthResetPasswordModule { }
