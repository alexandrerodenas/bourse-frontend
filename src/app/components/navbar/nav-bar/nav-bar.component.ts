import { Component, Input } from '@angular/core';
import { FaIconComponent } from "@fortawesome/angular-fontawesome";
import { faSackDollar } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [
    FaIconComponent
  ],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent {

  protected readonly faSackDollar = faSackDollar;
  @Input() appTitle!: string;
}
