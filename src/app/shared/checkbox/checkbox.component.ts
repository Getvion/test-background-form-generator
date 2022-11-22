import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NewItemInFormType } from 'src/app/app.component';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss'],
})
export class CheckboxComponent {
  @Input() checkboxData: { text: string; isChecked: boolean }[] = [];

  @Input() labelText: string = '';

  @Output() newItemEvent = new EventEmitter<NewItemInFormType>();

  isAllChecked = false;

  checkedElems: string[] = [];

  onAllCheck() {
    if (this.checkboxData.every((checkbox) => checkbox.isChecked)) {
      this.checkboxData.forEach((checkbox) => (checkbox.isChecked = false));

      this.isAllChecked = false;
      this.checkedElems = [];
    } else {
      this.checkboxData.forEach((checkbox) => {
        checkbox.isChecked = true;
        this.checkedElems.push(checkbox.text);
      });
    }
    this.addNewItem('Навыки', this.checkedElems);
  }

  onChanged(skill: string, isChecked: boolean) {
    this.checkedElems = isChecked
      ? [...this.checkedElems, skill]
      : this.checkedElems.filter((elem) => elem !== skill);

    this.addNewItem('Навыки', this.checkedElems);
  }

  addNewItem(key: string, value: string[]) {
    const uniqeElems = [...new Set(value)];

    this.newItemEvent.emit({ [key]: uniqeElems });
  }
}
