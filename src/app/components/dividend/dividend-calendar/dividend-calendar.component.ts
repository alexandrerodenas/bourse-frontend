import { Component } from '@angular/core';
import { StockRepository } from "../../../repositories/stock-repository.service";
import { take } from "rxjs";
import { Dividend } from "../../../model/dividend";
import { DatePipe, NgForOf, NgIf, TitleCasePipe, UpperCasePipe } from "@angular/common";

@Component({
  selector: 'app-dividend-calendar',
  standalone: true,
  imports: [
    DatePipe,
    NgForOf,
    UpperCasePipe,
    TitleCasePipe,
    NgIf
  ],
  templateUrl: './dividend-calendar.component.html',
  styleUrl: './dividend-calendar.component.css'
})
export class DividendCalendarComponent {
  dividends: Dividend[];

  constructor(stockRepository: StockRepository) {
    stockRepository
      .fetchDividends()
      .pipe(take(1))
      .subscribe(dividends => this.dividends = dividends)
  }

}
