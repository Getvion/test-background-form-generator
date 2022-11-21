export interface IUserFormData {
  name: {
    required: boolean;
    isExtendable: boolean;
    labelText: string;
    inputType: string;
    inputSize: InputSize;
  };
  age: {
    required: boolean;
    labelText: string;
    inputType: string;
  };
  family: {
    required: boolean;
    labelText: string;
    items: string[];
  };
  university: {
    descriptoin: string;
    required: boolean;
    labelText: string;
    isExtendable: boolean;
    items: { inputType: string; inputSize: InputSize }[];
  };
  birthPlace: {
    required: boolean;
    labelText: string;
    items: string[];
  };
  skills: {
    required: boolean;
    labelText: string;
    items: { text: string; isChecked: boolean }[];
  };
}

export type InputSize = 'middle' | 'long' | 'short';
