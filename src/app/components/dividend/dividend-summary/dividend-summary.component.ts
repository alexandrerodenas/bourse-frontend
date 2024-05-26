import { Component, Input } from '@angular/core';
import { Dividend } from "../../../model/dividend";
import { FaIconComponent } from "@fortawesome/angular-fontawesome";
import { NgForOf, NgIf, TitleCasePipe } from "@angular/common";
import { NumericRowColorDirective } from "../../shared/numeric-row-color.directive";

@Component({
  selector: 'app-dividend-summary',
  standalone: true,
  imports: [
    FaIconComponent,
    NgForOf,
    NgIf,
    TitleCasePipe,
    NumericRowColorDirective
  ],
  templateUrl: './dividend-summary.component.html',
  styleUrl: './dividend-summary.component.css'
})
export class DividendSummaryComponent {
  @Input() dividends!: Dividend[];

}
