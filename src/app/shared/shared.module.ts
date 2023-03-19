import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent, HeaderComponent } from './layout';
import { LogoComponent } from './components/logo/logo.component';
import { TextLogoComponent } from './components/text-logo/text-logo.component';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    HeaderComponent,
    LogoComponent,
    TextLogoComponent,
    FooterComponent,
  ],
  exports: [HeaderComponent, LogoComponent, TextLogoComponent, FooterComponent],
  imports: [CommonModule, RouterLink, RouterLinkActive, FontAwesomeModule],
})
export class SharedModule {}
