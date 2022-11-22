import { Injectable } from '@angular/core';

import { IUserFormData } from '../@types/IUserFormData';

@Injectable({
  providedIn: 'root',
})
export class DataRequestsService {
  async requestFormData(): Promise<IUserFormData> {
    // Иммитация бурной загрзуки
    // const data = await fetch('requestString', options)
    // const data = await dta.json()

    return {
      name: {
        required: true,
        isExtendable: false,
        labelText: 'Имя',
        inputType: 'text',
        inputSize: 'long',
      },
      age: {
        required: true,
        labelText: 'Возраст',
        inputType: 'number',
      },
      family: {
        required: true,
        labelText: 'Семейное положение',
        items: ['Женат / замужем', 'Не женат / не замужем'],
      },
      university: {
        descriptoin: 'Укажите заведения в которых вы учились',
        required: false,
        labelText: 'ВУЗ',
        isExtendable: true,
        items: [{ inputType: 'text', inputSize: 'middle' }],
      },
      birthPlace: {
        required: false,
        labelText: 'Место рождения',
        items: [
          'Не важно',
          'Астрахань',
          'Волгоград',
          'Волжский',
          'Ростов-на-Дону',
          'Саратов',
          'Элиста',
        ],
      },
      skills: {
        required: false,
        labelText: 'Навыки',
        items: [
          { text: 'Общение', isChecked: true },
          { text: 'Вождение', isChecked: false },
          { text: 'Иностранные языки', isChecked: true },
          { text: 'Программирование', isChecked: false },
          { text: 'Бег с препятствиями', isChecked: true },
          { text: 'Управление вертолетом', isChecked: false },
          { text: 'Быстрое чтение', isChecked: true },
          { text: 'Самозащита', isChecked: false },
        ],
      },
    };
  }
}
