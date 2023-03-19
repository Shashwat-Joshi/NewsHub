import { Component } from '@angular/core';
import { AppSettings } from '../../../../core/constants/settings';
import {
  FieldValidatorsService,
  ValidatorResult,
} from '../../services/field-validators.service';
import { User } from '../../../../core/models/user.model';
import { AuthenticationService } from '../../services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'register-component',
  templateUrl: './register.component.html',
  styleUrls: ['../sign-in/sign-in.component.scss', './register.component.scss'],
})
export class RegisterComponent {
  primaryColor: string = AppSettings.PRIMARY_COLOR;
  btnDisabled: boolean = true;
  showErrorMsg: boolean = false;
  errorMsg: string = '';
  showSuccessMsg: boolean = false;
  isLoading: boolean = false;

  // Form Fields for Register
  email: string = '';
  password: string = '';
  reEnteredPassword: string = '';
  termsAndConditions: boolean = false;

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

  // Validates the form field and changes the state of register
  // button accordingly
  registerUIToggle() {
    if (
      this.email.length !== 0 &&
      this.password.length !== 0 &&
      this.reEnteredPassword.length !== 0 &&
      this.termsAndConditions
    ) {
      this.enableButton();
    } else {
      this.disableButton();
    }
  }

  validator() {
    this.errorMsg = '';
    this.showErrorMsg = false;
    const result: ValidatorResult = FieldValidatorsService.isRegisterFormValid(
      this.email,
      this.password,
      this.reEnteredPassword,
      this.termsAndConditions
    );
    if (result.isValid) {
      // Call Register API
      this.isLoading = true;
      this.regesterUser();
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

  private regesterUser() {
    setTimeout(() => {
      const user: User = new User(this.email, this.password);
      this.authService.registerUser(user).subscribe((json) => {
        if (json === null) {
          this.showError('409: EMAIL ALREADY IN USE, Please Sign In');
        }
        this.isLoading = false;
        this.email = this.password = this.reEnteredPassword = '';
        this.termsAndConditions = false;
        this.showSuccessMsg = true;
      });
    }, 2000);
  }
}
