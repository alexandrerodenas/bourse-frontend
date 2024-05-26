import { Component } from '@angular/core';
import { Dividend } from "../../../model/dividend";
import { StockRepository } from "../../../repositories/stock-repository.service";
import { Observable, take } from "rxjs";
import { DividendCalendarComponent } from "../dividend-calendar/dividend-calendar.component";
import { DividendSummaryComponent } from "../dividend-summary/dividend-summary.component";
import { AsyncPipe, NgIf } from "@angular/common";

@Component({
  selector: 'app-divend-home-page',
  standalone: true,
  imports: [
    DividendCalendarComponent,
    DividendSummaryComponent,
    NgIf,
    AsyncPipe
  ],
  templateUrl: './dividend-home-page.component.html',
  styleUrl: './dividend-home-page.component.css'
})
export class DividendHomePageComponent {
  dividendsObs: Observable<Dividend[]>;

  constructor(stockRepository: StockRepository) {
    this.dividendsObs = stockRepository
      .fetchDividends()
      .pipe(take(1))
  }
}
