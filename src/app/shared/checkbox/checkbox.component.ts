import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss'],
})
export class CheckboxComponent {
  // @Input() labelText: string = '';

  @Input() text: string = '';

  @Input() checkboxData: { text: string; isChecked: boolean }[] = [];

  public isAllChecked = false;
  // public isChecked = false;

  // public regOnChange = (elem: boolean) => {};

  // public regOnTouched = () => {};

  // registerOnChange(fn: any): void {
  // this.regOnChange = fn;
  // }

  // registerOnTouched(fn: any): void {
  //   this.regOnTouched = fn;
  // }

  // writeValue(value: any) {
  // pre-populate value
  // if (value) {
  // this.isChecked = value;
  // }
  // }

  onAllCheck() {}

  onChanged($event: Event) {
    console.log($event);

    // on change
    // this.isChecked = ($event.target as HTMLInputElement).checked as boolean;
    // this.regOnChange(($event.target as HTMLInputElement).checked);
  }
}
