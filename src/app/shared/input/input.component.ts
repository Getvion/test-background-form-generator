import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
})
export class InputComponent {
  @Input() labelValue: string = '';

  @Input() inputPlaceholder: string = '';

  @Input() isRequired = true;

  @Input() inputDescription: string = '';

  @Input() isExtendable = false;
}
