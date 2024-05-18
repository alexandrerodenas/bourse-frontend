import { Component } from '@angular/core';
import { StockRepository } from "../../../repositories/stock-repository.service";
import { take } from "rxjs";
import Highcharts from 'highcharts/highcharts.src';
import { ChartData } from "../../../model/chart-data";
import { HighchartsChartModule } from "highcharts-angular";
import { NgIf } from "@angular/common";

@Component({
  selector: 'app-gain-loss-chart',
  standalone: true,
  imports: [
    HighchartsChartModule,
    NgIf
  ],
  templateUrl: './gain-loss-chart.component.html',
  styleUrl: './gain-loss-chart.component.css'
})
export class GainLossChartComponent {
  Highcharts: typeof Highcharts = Highcharts;
  chartOptions: Highcharts.Options;

  constructor(stockRepository: StockRepository) {
    stockRepository
      .fetchGainLossHistory()
      .pipe(take(1))
      .subscribe(chartData => {
        this.chartOptions = {
          title: {
            text: 'Gain / Perte'
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
            name: "Historique",
            data: item.data
          }))
        };
      });
  }
}

