import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PortfolioSummaryTable } from "./components/portfolio/stock-values-summary/portfolio-summary-table.component";
import { PortfolioViewComponent } from "./components/portfolio/portfolio-view/portfolio-view.component";
import { InvestmentChartComponent } from "./components/global-charts/investment-chart/investment-chart.component";
import { GainLossChartComponent } from "./components/global-charts/gain-loss-chart/gain-loss-chart.component";
import { StockValuesChartComponent } from "./components/global-charts/stock-values-chart/stock-values-chart.component";
import { NavBarComponent } from "./components/navbar/nav-bar/nav-bar.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PortfolioSummaryTable, PortfolioViewComponent, InvestmentChartComponent, GainLossChartComponent, StockValuesChartComponent, NavBarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  selectedStock: string;
  public readonly appTitle: string = "Mon gestionnaire PEA";

  onStockSelected(stockName: string) {
    this.selectedStock = stockName;
  }
}
