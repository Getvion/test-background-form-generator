import { Component, EventEmitter, Input, Output } from '@angular/core';

import { InputSize } from 'src/app/@types/IUserFormData';
import { NewItemInFormType } from 'src/app/app.component';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
})
export class InputComponent {
  @Input() labelValue: string = '';

  @Input() inputPlaceholder: string = '';

  @Input() isRequired = true;

  @Input() inputDescriptionText: string = '';

  @Input() isExtendable = false;

  @Input() inputWidth: InputSize = 'long';

  @Input() extendableItems: { inputType: string; inputSize: InputSize }[] = [];

  @Output() newItemEvent = new EventEmitter<NewItemInFormType>();

  addNewItem(key: string, value: string) {
    this.newItemEvent.emit({ [key]: value });
  }
}
