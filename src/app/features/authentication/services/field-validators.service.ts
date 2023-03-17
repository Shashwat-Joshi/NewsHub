import { Injectable } from '@angular/core';

export class ValidatorResult {
  isValid: boolean;
  error: string;

  constructor(isValid: boolean, error: string) {
    this.isValid = isValid;
    this.error = error;
  }
}

@Injectable({
  providedIn: 'root',
})
export class FieldValidatorsService {
  constructor() {}

  static isRegisterFormValid(
    email: string,
    pwd: string,
    reEnteredPwd: string,
    tnc: boolean
  ): ValidatorResult {
    const emailValidatorResult: ValidatorResult = this.isValidEmail(email);
    const pwdValidatorResult: ValidatorResult = this.isValidPwd(
      pwd,
      reEnteredPwd
    );
    const tncValidatorResult: ValidatorResult = this.isValidTnc(tnc);

    if (!emailValidatorResult.isValid) return emailValidatorResult;
    if (!pwdValidatorResult.isValid) return pwdValidatorResult;
    if (!tncValidatorResult.isValid) return tncValidatorResult;
    return new ValidatorResult(true, '');
  }

  private static isValidEmail(email: string): ValidatorResult {
    const EMAIL_REGEX_PATTERN: string =
      '^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$';
    const isValid: boolean = RegExp(EMAIL_REGEX_PATTERN).test(email);
    const error: string = isValid ? '' : 'Email address is invalid';
    return new ValidatorResult(isValid, error);
  }

  private static isValidPwd(
    pwd: string,
    reEnteredPwd: string
  ): ValidatorResult {
    let error: string = '';
    let isValid: boolean = false;
    if (pwd === reEnteredPwd) {
      if (pwd.length >= 8) {
        isValid = true;
      } else {
        error = 'WEAK PASSWORD: Password length should be greater than 7';
      }
    } else {
      error =
        'PASSWORDS DO NOT MATCH: Please enter the same password in both fields';
    }
    return new ValidatorResult(isValid, error);
  }

  private static isValidTnc(tnc: boolean): ValidatorResult {
    let error: string = '';
    let isValid: boolean = true;
    if (!tnc) {
      isValid = false;
      error = 'Please accept the terms of service';
    }
    return new ValidatorResult(isValid, error);
  }
}
