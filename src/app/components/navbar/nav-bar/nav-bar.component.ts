import { Component, Input } from '@angular/core';
import { FaIconComponent } from "@fortawesome/angular-fontawesome";
import { faSackDollar } from "@fortawesome/free-solid-svg-icons";
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [
    FaIconComponent,
    RouterLink
  ],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent {

  protected readonly faSackDollar = faSackDollar;
  @Input() appTitle!: string;
}
