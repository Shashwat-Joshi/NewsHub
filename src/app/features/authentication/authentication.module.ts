import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignInModule } from './components/root/root.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import {SharedModule} from "../../shared/shared.module";



@NgModule({
  declarations: [
    SignInModule,
    SignInComponent
  ],
    imports: [
        CommonModule,
        SharedModule
    ],
  exports: [
    SignInModule
  ]
})
export class AuthenticationModule { }
