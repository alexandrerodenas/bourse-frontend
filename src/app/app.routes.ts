import { Routes } from '@angular/router';
import { HomePageComponent } from "./components/views/home-page/home-page.component";
import { DividendHomePageComponent } from "./components/dividend/divend-home-page/dividend-home-page.component";

export const routes: Routes = [
  {path: 'dividends', component: DividendHomePageComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomePageComponent},
];
