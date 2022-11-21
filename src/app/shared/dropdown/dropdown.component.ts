import { Component, Input, forwardRef, HostListener } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

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
  showMenu: boolean;

  isDisabled: boolean;

  selectedItem: string = '';

  state: DropdownMouseState;

  @Input() isRequired = false;

  @Input() data: IDropdownItem = [];

  @Input() placeholder: string = '';

  @Input() width: string = '300';

  @Input() labelValue: string = '';

  @HostListener('document:click') clickedOutside() {
    if (this.state == DropdownMouseState.outside) {
      this.showMenu = false;
    }
  }

  constructor() {
    this.showMenu = false;
    this.isDisabled = false;
    this.state = DropdownMouseState.outside;
  }

  valueChange(elem: string) {
    this.selectedItem = elem;
    this.showMenu = false;
  }

  setDisabledState(isDisabled: boolean): void {
    this.isDisabled = isDisabled;
  }
}
