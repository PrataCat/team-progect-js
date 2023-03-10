//----------Svitlana-------------

import { sendCurrentArray } from './news-list';
import { creatCardMarkup } from './creatCardMarkup';
import { renderWeatherCard } from './weather';

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

  onSelect: function onSelect({ date, formattedDate, datepicker }) {
    let filteredPopularNewsMarkUp = '';
    box.innerHTML = '';
    paginatedEl.classList.add('visually-hidden');
    footerEl.classList.add('footer-margin');

    let filteredPopularNews = filterPopularNewsByDate(formattedDate);

    if (filteredPopularNews.length === 0) {
      renderNoNews("We haven't found news for the selected date");
    } else {
      filteredPopularNewsMarkUp =
        appendWeatherBoxes(filteredPopularNews).join('');

      box.innerHTML = filteredPopularNewsMarkUp;
      renderWeatherCard();
    }
  },
});

/**
 * @param {string | string[]} formattedDate
 */

function filterPopularNewsByDate(formattedDate) {
  const popularNewsData = sendCurrentArray();
  const filteredPopularNewsData = popularNewsData.filter(
    popularNews => popularNews.published_date === formattedDate
  );

  return filteredPopularNewsData;
}

/**
 * @param {any[]} arrForMarkup
 */

function appendWeatherBoxes(arrForMarkup) {
  let currentDisplayWidth = window.innerWidth;
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

/**
 * @param {string} noResultsText
 */

function renderNoNews(noResultsText) {
  const noNewsMarkUp = `<li class="no-results-wrap"><p class="no-results-text">${noResultsText}</p><span class="no-results-bgr"></span></li>`;
  box.innerHTML = noNewsMarkUp;
}

export { renderNoNews };
