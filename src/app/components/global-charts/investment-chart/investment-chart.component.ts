import { ChangeDetectionStrategy, Component } from '@angular/core';
import { StockRepository } from "../../../repositories/stock-repository.service";
import Highcharts from 'highcharts/es-modules/masters/highcharts.src';
import { take } from "rxjs";
import { NgIf } from "@angular/common";
import { HighchartsChartModule } from "highcharts-angular";
import { ChartData } from "../../../model/chart-data";

@Component({
  selector: 'app-investment-chart',
  standalone: true,
  imports: [
    NgIf,
    HighchartsChartModule
  ],
  templateUrl: './investment-chart.component.html',
  styleUrl: './investment-chart.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InvestmentChartComponent {
  Highcharts: typeof Highcharts = Highcharts;
  chartOptions: Highcharts.Options;

  constructor(stockRepository: StockRepository) {
    stockRepository
      .fetchInvestmentHistory()
      .pipe(take(1))
      .subscribe(chartData => {
        this.chartOptions = {
          title: {
            text: 'Investissement / Estimation'
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
          series: chartData.map((item:ChartData) => ({
            type: 'line',
            name: this.translate(item.name),
            data: item.data
          }))
        };
      });
  }

  private translate(title: string){
    if(title === "total_market_value"){
      return "Estimation"
    } else {
      return "Investissement"
    }
  }


}
