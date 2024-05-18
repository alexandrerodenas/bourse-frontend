import { Component } from '@angular/core';
import { GainLossChartComponent } from "../../global-charts/gain-loss-chart/gain-loss-chart.component";
import { InvestmentChartComponent } from "../../global-charts/investment-chart/investment-chart.component";
import { PortfolioViewComponent } from "../../portfolio/portfolio-view/portfolio-view.component";
import { StockValuesChartComponent } from "../../global-charts/stock-values-chart/stock-values-chart.component";

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [
    GainLossChartComponent,
    InvestmentChartComponent,
    PortfolioViewComponent,
    StockValuesChartComponent
  ],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {
  selectedStock: string;

  onStockSelected(stockName: string) {
    this.selectedStock = stockName;
  }
}
