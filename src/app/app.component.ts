import { Component, OnInit } from '@angular/core';

import { IUserFormData } from './@types/IUserFormData';

import { DataRequestsService } from './services/data-requests.service';

export type NewItemInFormType = { [key: string]: string | number | string[] };

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  userData: IUserFormData = {
    name: {
      required: false,
      isExtendable: false,
      labelText: '',
      inputType: '',
      inputSize: 'long',
    },
    age: {
      required: false,
      labelText: '',
      inputType: '',
    },
    family: {
      required: false,
      labelText: '',
      items: [],
    },
    university: {
      descriptoin: '',
      required: false,
      labelText: '',
      isExtendable: false,
      items: [],
    },
    birthPlace: {
      required: false,
      labelText: '',
      items: [],
    },
    skills: {
      required: false,
      labelText: '',
      items: [],
    },
  };

  isButtonDisabled = true;

  resultFormData = {};

  constructor(private dataRequest: DataRequestsService) {}

  async ngOnInit() {
    this.userData = await this.dataRequest.requestFormData();
  }

  addItem(newItem: NewItemInFormType) {
    this.resultFormData = { ...this.resultFormData, ...newItem };

    const requiredFieldsCount = Object.entries(this.userData).filter(
      ([, values]) => values.required,
    ).length;

    const fieldsFilled = Object.entries(this.resultFormData).map(([, values]) => values).length;

    this.isButtonDisabled = fieldsFilled >= requiredFieldsCount;
  }

  onFormSubmit() {
    const formData = JSON.stringify(this.resultFormData);
    alert(formData);
  }
}
