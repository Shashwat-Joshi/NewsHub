import { Component } from '@angular/core';
import { AppSettings } from '../../../../core/constants/settings';
import {
  FieldValidatorsService,
  ValidatorResult,
} from '../../services/field-validators.service';

@Component({
  selector: 'register-component',
  templateUrl: './register.component.html',
  styleUrls: ['../sign-in/sign-in.component.scss', './register.component.scss'],
})
export class RegisterComponent {
  primaryColor: string = AppSettings.PRIMARY_COLOR;
  btnDisabled: boolean = true;

  // Form Fields for Register
  email: string = '';
  password: string = '';
  reEnteredPassword: string = '';
  termsAndConditions: boolean = false;

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
    const result: ValidatorResult = FieldValidatorsService.isRegisterFormValid(
      this.email,
      this.password,
      this.reEnteredPassword,
      this.termsAndConditions
    );
    if (result.isValid) {
      // Create Account
    } else {
      // UPDATE UI - SHOW ERROR MESSAGE
      alert(result.error);
    }
  }
}
