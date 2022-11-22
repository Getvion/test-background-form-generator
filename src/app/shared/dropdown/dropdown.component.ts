import { Component, Input, forwardRef, HostListener, Output, EventEmitter } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { NewItemInFormType } from 'src/app/app.component';

export type IDropdownItem = string[];

enum DropdownMouseState {
  inside,
  outside,
}

export const CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  // eslint-disable-next-line @typescript-eslint/no-use-before-define
  useExisting: forwardRef(() => DropdownComponent),
  multi: true,
};

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss'],
  providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR],
})
export class DropdownComponent {
  showMenu = false;

  selectedItem: string = '';

  state: DropdownMouseState = DropdownMouseState.outside;

  @Input() isRequired = false;

  @Input() data: IDropdownItem = [];

  @Input() placeholder: string = '';

  @Input() width: string = '300';

  @Input() labelValue: string = '';

  @Output() newItemEvent = new EventEmitter<NewItemInFormType>();

  @HostListener('document:click')
  clickedOutside() {
    if (this.state == DropdownMouseState.outside) {
      this.showMenu = false;
    }
  }

  valueChange(key: string, elem: string) {
    this.selectedItem = elem;
    this.showMenu = false;

    this.addNewItem(key, elem);
  }

  addNewItem(key: string, value: string) {
    this.newItemEvent.emit({ [key]: value });
  }
}
