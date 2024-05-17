import { Component } from '@angular/core';
import { HistoryRepository } from "../../../repositories/history-repository";
import { take } from "rxjs";
import { ChartData } from "../../../model/chart-data";
import Highcharts from 'highcharts/highcharts.src';
import { HighchartsChartModule } from "highcharts-angular";
import { NgIf } from "@angular/common";

@Component({
  selector: 'app-stock-values-chart',
  standalone: true,
  imports: [
    HighchartsChartModule,
    NgIf
  ],
  templateUrl: './stock-values-chart.component.html',
  styleUrl: './stock-values-chart.component.css'
})
export class StockValuesChartComponent {
  Highcharts: typeof Highcharts = Highcharts;
  chartOptions: Highcharts.Options;

  constructor(historyRepository: HistoryRepository) {
    historyRepository
      .fetchStockValuesHistory()
      .pipe(take(1))
      .subscribe(chartData => {
        this.chartOptions = {
          title: {
            text: 'Historique des valeurs'
          },
          xAxis: {
            type: 'datetime',
            title: {
              text: 'Date'
            }
          },
          yAxis: {
            title: {
              text: 'Value'
            }
          },
          series: chartData.map((item: ChartData) => ({
            type: 'line',
            name: item.name.charAt(0).toUpperCase() + item.name.slice(1),
            data: item.data
          }))
        };
      });
  }
}
