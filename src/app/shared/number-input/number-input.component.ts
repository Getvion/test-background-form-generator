import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-number-input',
  templateUrl: './number-input.component.html',
  styleUrls: ['./number-input.component.scss'],
})
export class NumberInputComponent implements OnInit {
  @Input() labelValue: string = '';

  @Input() isRequired = false;

  inputValue: number = 1;

  constructor() {}

  ngOnInit(): void {}

  onIncrease() {
    this.inputValue++;
  }

  onDecrease() {
    this.inputValue--;
  }
}
