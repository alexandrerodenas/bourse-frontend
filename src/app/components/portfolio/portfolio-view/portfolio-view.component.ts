import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Portfolio } from "../../../model/portfolio";
import { HistoryRepository } from "../../../repositories/history-repository";
import { take } from "rxjs";
import { PortfolioSelectorComponent } from "../portfolio-selector/portfolio-selector.component";
import { PortfolioSummaryTable } from "../stock-values-summary/portfolio-summary-table.component";
import { PortfolioInformationComponent } from "../portfolio-information/portfolio-information.component";
import { NgIf } from "@angular/common";

@Component({
  selector: 'app-portfolio-view',
  standalone: true,
  imports: [
    PortfolioSelectorComponent,
    PortfolioSummaryTable,
    PortfolioInformationComponent,
    NgIf
  ],
  templateUrl: './portfolio-view.component.html',
  styleUrl: './portfolio-view.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PortfolioViewComponent {
  portfolios: ReadonlyArray<Portfolio>;
  selectedPortfolio: Portfolio;

  constructor(readonly historyRepository: HistoryRepository) {
    historyRepository
      .fetchPortfolios()
      .pipe(take(1))
      .subscribe(portfolios => this.portfolios = [...portfolios])
  }

  onPortfolioSelected(selectedPortfolio: Portfolio): void {
    this.selectedPortfolio = selectedPortfolio;
  }
}
