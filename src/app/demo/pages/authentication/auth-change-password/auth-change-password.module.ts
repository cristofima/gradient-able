import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthChangePasswordComponent } from './auth-change-password.component';
import { AuthChangePasswordRoutingModule } from './auth-change-password-routing.module';

@NgModule({
  declarations: [AuthChangePasswordComponent],
  imports: [
    CommonModule,
    AuthChangePasswordRoutingModule
  ]
})
export class AuthChangePasswordModule { }
