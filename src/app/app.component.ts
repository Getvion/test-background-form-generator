import { Component, OnInit } from '@angular/core';

import { IUserFormData } from './@types/IUserFormData';

import { DataRequestsService } from './services/data-requests.service';

export type NewItemInFormType = { [key: string]: string | number | boolean };

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

  //
  resultFormData = {};

  addItem(newItem: NewItemInFormType) {
    this.resultFormData = { ...this.resultFormData, ...newItem };
    console.log(this.resultFormData);
  }

  //
  constructor(private dataRequest: DataRequestsService) {}

  async ngOnInit() {
    this.userData = await this.dataRequest.requestFormData();
  }

  onFormSubmit() {}
}
