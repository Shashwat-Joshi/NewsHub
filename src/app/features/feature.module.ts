import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { AuthenticationModule } from './authentication/authentication.module';
import { SharedModule } from '../shared/shared.module';
import { NgbCarousel, NgbSlide } from '@ng-bootstrap/ng-bootstrap';
import { CoreModule } from '../core/core.module';
import { CategoriesModule } from './categories/categories.module';
import { RouterLink } from '@angular/router';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    SharedModule,
    NgbCarousel,
    NgbSlide,
    CoreModule,
    RouterLink,
  ],
  exports: [AuthenticationModule, CategoriesModule],
})
export class FeatureModule {}
