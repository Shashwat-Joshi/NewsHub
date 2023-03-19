import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CryptoComponent } from './crypto/crypto.component';
import { FinanceComponent } from './finance/finance.component';
import { PoliticsComponent } from './politics/politics.component';
import { SportsComponent } from './sports/sports.component';
import { EntertainmentComponent } from './entertainment/entertainment.component';
import { GadgetsComponent } from './gadgets/gadgets.component';
import { SharedModule } from '../../shared/shared.module';
import { CoreModule } from '../../core/core.module';

@NgModule({
  declarations: [
    CryptoComponent,
    FinanceComponent,
    PoliticsComponent,
    SportsComponent,
    EntertainmentComponent,
    GadgetsComponent,
  ],
  imports: [CommonModule, SharedModule, CoreModule],
})
export class CategoriesModule {}
