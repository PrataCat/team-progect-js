//----------Svitlana-------------

//Підключення і налаштування календаря з бібліотеки:
import notFoundImg from '../images/not-found-img.png';
import { getMostPopularArticles } from './newsApiService';
import { creatCardMarkup } from './creatCardMarkup';

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

  onSelect: async function onSelect({ date, formattedDate, datepicker }) {
    try {
      box.innerHTML = '';

      let filteredPopularNews = await filterPopularNewsByDate(formattedDate);

      if (filteredPopularNews.length === 0) {
        renderNoNews();
      } else {
        const filteredPopularNewsMarkUp = filteredPopularNews.reduce(
          (acc, popularNews) => creatCardMarkup(popularNews) + acc,
          ''
        );
        box.innerHTML = filteredPopularNewsMarkUp;
      }
    } catch (err) {
      console.log(err);
    }
  },
});

// функція повертає масив обєктів відфільтрованих по вибраній даті:

async function filterPopularNewsByDate(formattedDate) {
  try {
    const popularNewsData = await getMostPopularArticles();
    const filteredPopularNewsData = popularNewsData.filter(popularNews => {
      return popularNews.published_date === formattedDate;
    });

    return filteredPopularNewsData;
  } catch (err) {
    console.log(err);
  }
}

// функція малює розмітку, якщо новини по вибраній даті не знайдені:

function renderNoNews() {
  const noNewsMarkUp = `<div class="no-results-wrap"><h2 class="no-results-header">We haven’t found news for the selected date</h2> <span class="no-results-bgr"></span></div>`;
  box.innerHTML = noNewsMarkUp;
}
