import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from "@angular/common";
import { Portfolio } from "../../../model/portfolio";
import { faCaretDown, faCaretUp } from '@fortawesome/free-solid-svg-icons';
import { FaIconComponent } from "@fortawesome/angular-fontawesome";

@Component({
  selector: 'app-portfolio-summary-table',
  standalone: true,
  imports: [CommonModule, FaIconComponent],
  templateUrl: './portfolio-summary-table.component.html',
  styleUrl: './portfolio-summary-table.component.css'
})
export class PortfolioSummaryTable {
  @Input() portfolio: Portfolio;
  faCaretUp = faCaretUp;
  faCaretDown = faCaretDown;
  @Output() stockSelected = new EventEmitter<string>();


  formatDigit(value: number): string {
    return value.toFixed(2);
  }

  capitalizeString(str: string): string {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  onRowClick(stockName: string): void {
    this.stockSelected.emit(stockName);
  }
}
