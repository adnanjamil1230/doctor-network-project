import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignIpComponent } from './sign-ip/sign-ip.component';
import { SignUpComponent } from './sign-up/sign-up.component';



@NgModule({
  declarations: [
    SignInComponent,
    SignIpComponent,
    SignUpComponent
  ],
  imports: [
    CommonModule
  ]
})
export class LoginModule { }
