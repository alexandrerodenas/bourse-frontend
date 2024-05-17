import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { mapJsonToPortfolio, Portfolio, updateStockChanges } from "../model/portfolio";
import * as mock from "./portfolios.mock";
import { mockedPortfolios } from "./portfolios.mock";
import { mapJsonToStock, Stock } from "../model/stock";
import { ChartData, mapToChartData } from "../model/chart-data";
import { mockedInvestment } from "./investment.mock";
import { mockedGainLoss } from "./gain-loss.mock";
import { mockedStockValues } from "./stock-values.mock";

const API_URL = 'http://localhost:8000/history';

@Injectable({
  providedIn: 'root'
})
export class HistoryRepository {

  constructor(private http: HttpClient) {
  }

  fetchPortfolios(): Observable<ReadonlyArray<Portfolio>> {
    const portfolios: Portfolio[] = mockedPortfolios.map(mapJsonToPortfolio);
    return of(
      updateStockChanges(portfolios)
    );
  }


  fetchGainLossHistory(): Observable<any> {
    const chartData : ChartData[] = mockedGainLoss.map(mapToChartData);
    return of(chartData);
  }

  fetchInvestmentHistory(): Observable<ChartData[]> {
    const chartData : ChartData[] = mockedInvestment.map(mapToChartData);
    return of(chartData);
  }

  fetchStockValuesHistory(): Observable<any> {
    const chartData : ChartData[] = mockedStockValues.map(mapToChartData);
    return of(chartData);
  }
}
