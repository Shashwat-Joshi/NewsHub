import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './layout';
import { LogoComponent } from './components/logo/logo.component';
import { TextLogoComponent } from './components/text-logo/text-logo.component';
import { RouterLink, RouterLinkActive } from '@angular/router';

@NgModule({
  declarations: [HeaderComponent, LogoComponent, TextLogoComponent],
  exports: [HeaderComponent, LogoComponent, TextLogoComponent],
  imports: [CommonModule, RouterLink, RouterLinkActive],
})
export class SharedModule {}
