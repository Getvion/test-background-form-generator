import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputComponent } from './input/input.component';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { NumberInputComponent } from './number-input/number-input.component';
import { AddInputComponent } from './add-input/add-input.component';
import { DropdownComponent } from './dropdown/dropdown.component';
import { SubmitButtonComponent } from './submit-button/submit-button.component';

@NgModule({
  declarations: [
    InputComponent,
    CheckboxComponent,
    NumberInputComponent,
    AddInputComponent,
    DropdownComponent,
    SubmitButtonComponent,
  ],
  imports: [CommonModule],
  exports: [
    InputComponent,
    CheckboxComponent,
    NumberInputComponent,
    AddInputComponent,
    DropdownComponent,
    SubmitButtonComponent,
  ],
})
export class SharedModule {}
