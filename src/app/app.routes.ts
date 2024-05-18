import { Routes } from '@angular/router';
import { DividendCalendarComponent } from "./components/dividend/dividend-calendar/dividend-calendar.component";
import { HomePageComponent } from "./components/views/home-page/home-page.component";

export const routes: Routes = [
  {path: 'dividends', component: DividendCalendarComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomePageComponent },
];
