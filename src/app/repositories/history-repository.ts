import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { mapJsonToPortfolio, Portfolio, updateStockChanges } from "../model/portfolio";
import * as mock from "./portfolios.mock";
import { mockedPortfolios } from "./portfolios.mock";
import { mapJsonToStock, Stock } from "../model/stock";

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
    return this.http.get(`${API_URL}/gain-loss`);
  }

  fetchInvestmentHistory(): Observable<any> {
    return this.http.get(`${API_URL}/investment`);
  }

  fetchStockValuesHistory(): Observable<any> {
    return this.http.get(`${API_URL}/stock-values?start_date=2024-05-06`);
  }
}
