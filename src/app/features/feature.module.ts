import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { AuthenticationModule } from './authentication/authentication.module';
import { SharedModule } from '../shared/shared.module';
import { NgxShimmerLoadingModule } from 'ngx-shimmer-loading';
import { NgbCarousel, NgbSlide } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    SharedModule,
    NgxShimmerLoadingModule,
    NgbCarousel,
    NgbSlide,
  ],
  exports: [AuthenticationModule],
})
export class FeatureModule {}
