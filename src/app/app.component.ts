import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterLink, RouterOutlet} from '@angular/router';
import {ButtonComponent} from "./components/button/button.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, ButtonComponent, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'monsterity-frontend';
}
