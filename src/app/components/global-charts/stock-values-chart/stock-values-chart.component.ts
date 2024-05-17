import { ChangeDetectionStrategy, Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { HistoryRepository } from "../../../repositories/history-repository";
import { take } from "rxjs";
import { ChartData } from "../../../model/chart-data";
import Highcharts from 'highcharts/highcharts.src';
import { HighchartsChartModule } from "highcharts-angular";
import { NgIf } from "@angular/common";
import { SeriesOptionsType } from "highcharts";

@Component({
  selector: 'app-stock-values-chart',
  standalone: true,
  imports: [
    HighchartsChartModule,
    NgIf
  ],
  templateUrl: './stock-values-chart.component.html',
  styleUrl: './stock-values-chart.component.css',
})
export class StockValuesChartComponent implements OnChanges {
  Highcharts: typeof Highcharts = Highcharts;
  chartOptions: Highcharts.Options;
  @Input() selectedStock!: string;
  series: ChartData[] = [];
  updateFlag = false;


  constructor(historyRepository: HistoryRepository) {

    historyRepository
      .fetchStockValuesHistory()
      .pipe(take(1))
      .subscribe(chartData => {
        this.series = chartData
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
          series: this.series.map((item: ChartData) => ({
            type: 'line',
            name: item.name.charAt(0).toUpperCase() + item.name.slice(1),
            data: item.data
          }))
        };
      });
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (!!changes['selectedStock'].currentValue) {
      this.chartOptions.series?.map(_ => _.visible = false)
      this.chartOptions.series?.filter(_ => _.name?.toLowerCase() === changes["selectedStock"].currentValue.toLowerCase()).map(_ => _.visible = true)

      this.updateFlag = true
    }
  }
}
