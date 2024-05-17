import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { Portfolio } from "../../../model/portfolio";
import { DatePipe, NgForOf } from "@angular/common";
import { FormsModule } from "@angular/forms";

@Component({
  selector: 'app-portfolio-selector',
  standalone: true,
  imports: [
    NgForOf,
    FormsModule,
    DatePipe
  ],
  templateUrl: './portfolio-selector.component.html',
  styleUrl: './portfolio-selector.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PortfolioSelectorComponent {
  @Input() portfolios: ReadonlyArray<Portfolio> = [];
  @Output() portfolioSelected: EventEmitter<Portfolio> = new EventEmitter<Portfolio>();
  selectedPortfolio: Portfolio;

  constructor() { }

  onPortfolioChange(): void {
    this.portfolioSelected.emit(this.selectedPortfolio);
  }

}
