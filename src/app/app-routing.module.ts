import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';
import { SignInModule } from './features/authentication/components/root/root.component';
import { CryptoComponent } from './features/categories/crypto/crypto.component';
import { FinanceComponent } from './features/categories/finance/finance.component';
import { GadgetsComponent } from './features/categories/gadgets/gadgets.component';
import { PoliticsComponent } from './features/categories/politics/politics.component';
import { SportsComponent } from './features/categories/sports/sports.component';
import { EntertainmentComponent } from './features/categories/entertainment/entertainment.component';
import { SubscribeComponent } from './features/subscribe/subscribe.component';

const routes: Routes = [
  { path: '', component: SignInModule },
  { path: 'home', component: HomeComponent },
  { path: 'crypto', component: CryptoComponent },
  { path: 'finance', component: FinanceComponent },
  { path: 'gadgets-and-gizmoz', component: GadgetsComponent },
  { path: 'politics', component: PoliticsComponent },
  { path: 'sports', component: SportsComponent },
  { path: 'entertainment', component: EntertainmentComponent },
  { path: 'subscribe', component: SubscribeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
