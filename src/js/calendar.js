//----------Svitlana-------------

import { sendCurrentArray } from './news-list';
import { creatCardMarkup } from './creatCardMarkup';
import { renderWeatherCard } from './weather';

//Підключення і налаштування календаря з бібліотеки:
import AirDatepicker from 'air-datepicker';
import localeEn from 'air-datepicker/locale/en';
import 'air-datepicker/air-datepicker.css';

const box = document.querySelector('.box-news');
const paginatedEl = document.querySelector('#tui-pagination-container');
const footerEl = document.querySelector('.footer');

new AirDatepicker('#date-picker', {
  classes: 'custom-air-datepicker',
  autoClose: 'true',
  locale: localeEn,
  dateFormat: 'dd/MM/yyyy',
  position: 'bottom right',
  maxDate: Date.now(),

  // функція виконується при кліку по даті:

  onSelect: function onSelect({ date, formattedDate, datepicker }) {
    let filteredPopularNewsMarkUp = '';
    box.innerHTML = '';
    paginatedEl.classList.add('visually-hidden');
    footerEl.classList.add('footer-margin');

    let filteredPopularNews = filterPopularNewsByDate(formattedDate);

    if (filteredPopularNews.length === 0) {
      renderNoNews(noResultsText);
    } else {
      filteredPopularNewsMarkUp =
        appendWeatherBoxes(filteredPopularNews).join('');

      box.innerHTML = filteredPopularNewsMarkUp;
      renderWeatherCard();
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

function appendWeatherBoxes(arrForMarkup) {
  let currentDisplayWidth = window.innerWidth; //текущая ширина вью порта

  // готовим массив разметки для рендера текущих товостей
  const cardMarkupArray = arrForMarkup.map(el => creatCardMarkup(el));
  if (currentDisplayWidth > 1280) {
    cardMarkupArray.splice(2, 0, `<li class="box-weather__item box "></li>`);
  } else if (currentDisplayWidth > 768) {
    cardMarkupArray.splice(1, 0, `<li class="box-weather__item box "></li>`);
  } else {
    cardMarkupArray.splice(0, 0, `<li class="box-weather__item box "></li>`);
  }

  return cardMarkupArray;
}

// функція малює розмітку, якщо новини по вибраній даті не знайдені:

const noResultsText = 'We haven’t found news for the selected date';

function renderNoNews(noResultsText) {
  const noNewsMarkUp = `<li class="no-results-wrap"><p class="no-results-text">${noResultsText}</p><span class="no-results-bgr"></span></li>`;
  box.innerHTML = noNewsMarkUp;
}

export { renderNoNews };
