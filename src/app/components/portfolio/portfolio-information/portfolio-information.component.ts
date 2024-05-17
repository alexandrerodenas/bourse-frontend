import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Portfolio } from "../../../model/portfolio";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { faPieChart, faChartLine, faMoneyBill, faCircleInfo } from '@fortawesome/free-solid-svg-icons';
import { DecimalPipe } from "@angular/common";

@Component({
  selector: 'app-portfolio-information',
  standalone: true,
  imports: [FontAwesomeModule, DecimalPipe],
  templateUrl: './portfolio-information.component.html',
  styleUrl: './portfolio-information.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PortfolioInformationComponent {
  @Input() portfolio: Portfolio;
  protected readonly faPieChart = faPieChart;
  protected readonly faChartLine = faChartLine;
  protected readonly faMoneyBill = faMoneyBill;


  getColor(): string {
    if(this.portfolio?.total_gain_deficit > 0){
      return "lightgreen"
    }
    return "lightcoral"
  }
}
