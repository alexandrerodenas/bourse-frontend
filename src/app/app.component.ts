import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PortfolioSummaryTable } from "./components/portfolio/stock-values-summary/portfolio-summary-table.component";
import { PortfolioViewComponent } from "./components/portfolio/portfolio-view/portfolio-view.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PortfolioSummaryTable, PortfolioViewComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'bourse-frontend';
}
