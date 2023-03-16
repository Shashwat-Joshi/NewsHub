import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { AuthenticationModule } from './authentication/authentication.module';

@NgModule({
  declarations: [
    HomeComponent,
  ],
  imports: [
    CommonModule,
    AuthenticationModule
  ],
  exports: [
    HomeComponent,
    AuthenticationModule
  ]
})
export class FeatureModule { }
