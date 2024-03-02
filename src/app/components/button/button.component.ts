import {Component, Input} from '@angular/core';
import {NgClass} from "@angular/common";

@Component({
  selector: 'monsterity-button',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})
export class ButtonComponent {

  @Input() theme: 'red' | 'green' | 'blue' | 'blue_light'
    | 'white' | 'gray' | 'yellow' | 'orange'
    | 'purple' = 'white';

}
