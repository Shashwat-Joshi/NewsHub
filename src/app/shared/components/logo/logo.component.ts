import { Component } from '@angular/core';
import { AppSettings } from '../../../core/constants/settings';

@Component({
  selector: 'app-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.scss'],
})
export class LogoComponent {
  logoPath: string = AppSettings.LOGO_PATH;
}
