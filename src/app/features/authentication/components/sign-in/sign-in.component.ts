import { Component } from '@angular/core';
import { AppSettings } from '../../../../core/constants/settings';
import {
  FieldValidatorsService,
  ValidatorResult,
} from '../../services/field-validators.service';
import { AuthenticationService } from '../../services/authentication.service';
import { User } from '../../../../core/models/user.model';
import { Router } from '@angular/router';

@Component({
  selector: 'sign-in-component',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
})
export class SignInComponent {
  email: string = '';
  password: string = '';
  primaryColor: string = AppSettings.PRIMARY_COLOR;
  btnDisabled: boolean = true;
  showErrorMsg: boolean = false;
  errorMsg: string = '';
  isLoading: boolean = false;

  constructor(
    private authService: AuthenticationService,
    private router: Router
  ) {}

  enableButton() {
    this.btnDisabled = false;
  }

  disableButton() {
    this.btnDisabled = true;
  }

  signUIToggle() {
    if (this.email.length !== 0 && this.password.length !== 0) {
      this.enableButton();
    } else {
      this.disableButton();
    }
  }

  validator() {
    this.errorMsg = '';
    this.showErrorMsg = false;
    const result: ValidatorResult = FieldValidatorsService.isSignInFormValid(
      this.email
    );
    if (result.isValid) {
      // MAKE API CALL
      this.isLoading = true;
      this.router.navigate(['/home']);
      this.signIn();
    } else {
      // UPDATE UI - SHOW ERROR MESSAGE
      this.showError(result.error);
    }
  }

  showError(msg: string) {
    this.disableButton();
    this.errorMsg = msg;
    this.showErrorMsg = true;
  }

  private signIn() {
    setTimeout(() => {
      const user: User = new User(this.email, this.password);
      this.authService.signIn(user).subscribe((json) => {
        if (json === null) {
          this.showError('404: EMAIL NOT FOUND, Please create an account');
        } else {
          let user: User = User.fromJson(json);
          if (user.getPassword === null) {
            this.showError(
              '401: UNAUTHORIZED, Please enter the correct credentials'
            );
          } else {
            // GOTO HOME SCREEN
            this.router.navigate(['/home']);
          }
        }
        this.isLoading = false;
      });
    }, 2000);
  }
}
