//----------Svitlana-------------

//Підключення і налаштування календаря з бібліотеки:

import AirDatepicker from 'air-datepicker';
import localeEn from 'air-datepicker/locale/en';
import 'air-datepicker/air-datepicker.css';

new AirDatepicker('#date-picker', {
  classes: 'custom-air-datepicker',
  autoClose: 'true',
  locale: localeEn,
  dateFormat: 'dd/MM/yyyy',
  position: 'bottom right',
  maxDate: Date.now(),
});
