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

  @Output() newItemEvent = new EventEmitter<NewItemInFormType>();

  inputValue: number = 1;

  onIncrease(key: string) {
    this.inputValue++;
    this.addNewItem(key, this.inputValue);
  }

  onDecrease(key: string) {
    this.inputValue--;
    this.addNewItem(key, this.inputValue);
  }

  onChange(key: string, value: string) {
    this.inputValue = Number(value);
    this.addNewItem(key, this.inputValue);
  }

  addNewItem(key: string, inputValue: string | number) {
    this.newItemEvent.emit({ [key]: inputValue });
  }
}
