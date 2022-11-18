import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputComponent } from './input/input.component';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { DropdownComponent } from './dropdown/dropdown.component';
import { NumberInputComponent } from './number-input/number-input.component';
import { AddInputComponent } from './add-input/add-input.component';

@NgModule({
  declarations: [
    InputComponent,
    CheckboxComponent,
    DropdownComponent,
    NumberInputComponent,
    AddInputComponent,
  ],
  imports: [CommonModule],
  exports: [
    InputComponent,
    CheckboxComponent,
    DropdownComponent,
    NumberInputComponent,
    AddInputComponent,
  ],
})
export class SharedModule {}
