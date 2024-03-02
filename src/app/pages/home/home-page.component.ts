import { Component } from '@angular/core';
import {ButtonComponent} from "../../components/button/button.component";

@Component({
  selector: 'monsterity-home',
  standalone: true,
    imports: [
        ButtonComponent
    ],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {

}
