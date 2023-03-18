import { Component } from '@angular/core';
import { AppSettings } from '../../../core/constants/settings';

@Component({
  selector: 'app-text-logo',
  templateUrl: './text-logo.component.html',
  styleUrls: ['./text-logo.component.scss'],
})
export class TextLogoComponent {
  primaryColor: string = AppSettings.PRIMARY_COLOR;
}
