import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignInModule } from './components/root/root.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SharedModule } from '../../shared/shared.module';
import { NgbCarousel, NgbSlide } from '@ng-bootstrap/ng-bootstrap';
import { RegisterComponent } from './components/register/register.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [SignInModule, SignInComponent, RegisterComponent],
  imports: [CommonModule, SharedModule, NgbCarousel, NgbSlide, FormsModule],
  exports: [SignInModule],
})
export class AuthenticationModule {}
