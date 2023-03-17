import { Component } from '@angular/core';
import {AppSettings} from "../../../../core/constants/settings";
import {NgbCarouselConfig} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'sign-in-page',
  templateUrl: './root.component.html',
  styleUrls: ['./root.component.scss'],
  providers: [NgbCarouselConfig]
})
export class SignInModule {
  constructor(config: NgbCarouselConfig) {
    config.interval = 4000;
    config.keyboard = true;
    config.pauseOnHover = false;
    config.pauseOnFocus = false;
  }
  carouselImages : string[] = [
    AppSettings.SIGN_IN_PAGE_CAROUSEL_URL_1,
    AppSettings.SIGN_IN_PAGE_CAROUSEL_URL_2,
    AppSettings.SIGN_IN_PAGE_CAROUSEL_URL_3
  ];

  showSignIn : boolean = false;
}
