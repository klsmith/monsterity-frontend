import { Component } from '@angular/core';
import {ButtonComponent} from "../../components/button/button.component";

@Component({
  selector: 'monsterity-assets',
  standalone: true,
  imports: [
    ButtonComponent
  ],
  templateUrl: './assets-page.component.html',
  styleUrl: './assets-page.component.scss'
})
export class AssetsPageComponent {

}
