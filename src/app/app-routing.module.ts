import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { MarketComponent } from './market/market.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { NewsComponent } from './news/news.component';
import { CoinInDetailComponent } from './coin-in-detail/coin-in-detail.component';

const routes: Routes = [
  { path: 'home-page', component: HomePageComponent },
  { path: 'market', component: MarketComponent },
  { path: 'news', component: NewsComponent },
  {path: 'coin-in-detail/:id', component: CoinInDetailComponent},
  { path: 'sign-up', component: SignUpComponent },
  { path: 'sign-in', component: SignInComponent },
  { path: '', redirectTo: '/home-page', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
