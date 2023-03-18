import { Component } from '@angular/core';
import { AppSettings } from '../../../../core/constants/settings';
import { AppComponent } from '../../../../app.component';

@Component({
  selector: 'sign-in-component',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
})
export class SignInComponent {
  primaryColor: string = AppSettings.PRIMARY_COLOR;

  showHomePage() {
    AppComponent.isSignedIn = true;
    // -> PATH
  }
}
