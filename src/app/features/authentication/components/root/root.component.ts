import { Component } from '@angular/core';
import {AppSettings} from "../../../../core/constants/settings";

@Component({
  selector: 'sign-in-page',
  templateUrl: './root.component.html',
  styleUrls: ['./root.component.scss']
})
export class SignInModule {
  imageUrl : string = AppSettings.SIGN_IN_PAGE_IMAGE;
}
