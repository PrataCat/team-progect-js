//----------Svitlana-------------

import { sendCurrentArray } from './news-list';
import { creatCardMarkup } from './creatCardMarkup';

//Підключення і налаштування календаря з бібліотеки:
import AirDatepicker from 'air-datepicker';
import localeEn from 'air-datepicker/locale/en';
import 'air-datepicker/air-datepicker.css';

const box = document.querySelector('.box-news');

new AirDatepicker('#date-picker', {
  classes: 'custom-air-datepicker',
  autoClose: 'true',
  locale: localeEn,
  dateFormat: 'dd/MM/yyyy',
  position: 'bottom right',
  maxDate: Date.now(),

  // функція виконується при кліку по даті:

  onSelect: function onSelect({ date, formattedDate, datepicker }) {
    box.innerHTML = '';

    let filteredPopularNews = filterPopularNewsByDate(formattedDate);

    if (filteredPopularNews.length === 0) {
      renderNoNews(noResultsText);
    } else {
      const filteredPopularNewsMarkUp = filteredPopularNews.reduce(
        (acc, popularNews) => creatCardMarkup(popularNews) + acc,
        ''
      );
      box.innerHTML = filteredPopularNewsMarkUp;
    }
  },
});

// функція повертає масив обєктів відфільтрованих по вибраній даті:

function filterPopularNewsByDate(formattedDate) {
  const popularNewsData = sendCurrentArray();
  const filteredPopularNewsData = popularNewsData.filter(popularNews => {
    return popularNews.published_date === formattedDate;
  });

  return filteredPopularNewsData;
}

// функція малює розмітку, якщо новини по вибраній даті не знайдені:

const noResultsText = 'We haven’t found news for the selected date';

function renderNoNews(noResultsText) {
  const noNewsMarkUp = `<div class="no-results-wrap"><p class="no-results-text">${noResultsText}</p><span class="no-results-bgr"></span></div>`;
  box.innerHTML = noNewsMarkUp;
}

export { renderNoNews };
