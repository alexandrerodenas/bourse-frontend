import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { mapJsonToPortfolio, Portfolio, updateStockChanges } from "../model/portfolio";
import { portfoliosMock } from "./mocks/portfolios.mock";
import { ChartData, mapToChartData } from "../model/chart-data";
import { investmentMock } from "./mocks/investment.mock";
import { gainLossMock } from "./mocks/gain-loss.mock";
import { stockValuesMock } from "./mocks/stock-values.mock";
import { Dividend, mapJsonToDividend } from "../model/dividend";
import { dividendMock } from "./mocks/dividend.mock";

const API_URL = 'http://localhost:8000/history';

@Injectable({
  providedIn: 'root'
})
export class StockRepository {

  constructor(private http: HttpClient) {
  }

  fetchPortfolios(): Observable<ReadonlyArray<Portfolio>> {
    const portfolios: Portfolio[] = portfoliosMock.map(mapJsonToPortfolio);
    return of(
      updateStockChanges(portfolios)
    );
  }


  fetchGainLossHistory(): Observable<ChartData[]> {
    const chartData: ChartData[] = gainLossMock.map(mapToChartData);
    return of(chartData);
  }

  fetchInvestmentHistory(): Observable<ChartData[]> {
    const chartData: ChartData[] = investmentMock.map(mapToChartData);
    return of(chartData);
  }

  fetchStockValuesHistory(): Observable<ChartData[]> {
    const chartData: ChartData[] = stockValuesMock.map(mapToChartData);
    return of(chartData);
  }

  fetchDividends(): Observable<Dividend[]> {
    return of(dividendMock.map(mapJsonToDividend).sort((a, b) => a.detachment_date.getTime() - b.detachment_date.getTime()))
  }
}
