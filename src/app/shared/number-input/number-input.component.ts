import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NewItemInFormType } from 'src/app/app.component';

@Component({
  selector: 'app-number-input',
  templateUrl: './number-input.component.html',
  styleUrls: ['./number-input.component.scss'],
})
export class NumberInputComponent {
  @Input() labelValue: string = '';

  @Input() isRequired = false;

  inputValue: number = 1;

  onIncrease() {
    this.inputValue++;
  }

  onDecrease() {
    this.inputValue--;
  }

  @Output() newItemEvent = new EventEmitter<NewItemInFormType>();

  addNewItem(key: string) {
    this.newItemEvent.emit({ [key]: this.inputValue });
  }
}
