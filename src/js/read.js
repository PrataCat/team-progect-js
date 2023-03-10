//-------Maks & Serj--------------
import {
  loadReadStorage,
  removeFromReadStorage,
  getCurrentDate,
} from './read-library';

import { creatCardMarkup } from './creatCardMarkup';
import { includeFavoriteNew, excludeFavoriteNew } from './library';

let noResultsText = 'The read news list is empty';
const footerEl = document.querySelector('.footer');
const headerEl = document.querySelector('.header');
const box = document.querySelector('.wrap-box ');
const loader = document.querySelector('.loader-container');

createReadMarkup();

function createReadMarkup() {
  const readObj = loadReadStorage();
  const keys = Object.keys(readObj);
  const emptyreadObj = !Object.keys(readObj).length;

  // Проверка, если пустой объект, то заглушка.
  if (emptyreadObj) {
    renderNoNews(noResultsText);
  } else {
    for (const date of keys) {
      // массивы объектов по датам readObj[date]
      // Удаление пустого массива из Л.С.
      if (readObj[date].length === 0) {
        delete readObj[date];

        localStorage.setItem('read', JSON.stringify(readObj));
        location.reload();
      }

      createDateBox(date);
    }

    for (const date of Object.keys(readObj)) {
      const box = document.querySelector(`[data-date="${date}"]`);
      const wrapList = document.getElementById(`${date}`);
      const murkupForBox = createMurkupForBoxItem(date);

      wrapList.insertAdjacentHTML('beforeend', murkupForBox.join(''));
    }
  }
}
setTimeout(() => {
  loader.classList.add('is-hidden');
}, 1000);

function createDateBox(date) {
  const wrapBox = document.querySelector('.wrap-box');
  const murkup = `<div data-date="${date}" class="dateList-wrap">
    <div class="span-wrap">
      <span class="date-span open">${date}<span class="arrow"></span></span>
    </div>
    <ul class="wrap-list box-news open" id="${date}"></ul>
  </div>`;

  const makeMurkup = wrapBox.insertAdjacentHTML('afterbegin', murkup);

  return;
}
// Массив разметки.
function createMurkupForBoxItem(date) {
  const readObj = loadReadStorage();
  const getKeyValue = readObj[date]; //массив из объектов

  const createMurkup = getKeyValue.map(el => {
    const { abstract, title, url, published_date, image_url, section, id } = el;

    const data = published_date.split('-').reverse().join('/');

    return creatCardMarkup(el);
  });

  return createMurkup;
}

const dateSpans = document.querySelectorAll('.date-span');
dateSpans.forEach(dateSpan => {
  dateSpan.addEventListener('click', function () {
    // Отримати ідентифікатор 'id' елемента <ul> за допомогою атрибуту 'id'
    const id = this.parentElement.parentElement.querySelector('ul').id;
    // Отримати елемент <ul> а допомогою ідентифікатора 'id'
    const list = document.getElementById(id);
    const arrow = dateSpan.querySelector('.arrow');
    arrow.classList.toggle('arrow-bot');
    list.classList.toggle('open');
  });
});

box.addEventListener('click', onButtonFavorite);

// ----------------------------------------------------------
// Без этих функций сердечки не проставляются на нашей странице
// если массив посылать в favorite-btn-action, то он конфликтует с присланым массивом из news-list

function onButtonFavorite(e) {
  if (e.target.closest('BUTTON')) {
    // кнопка
    const favButton = e.target.closest('BUTTON');
    // ацдишка li
    const favId = favButton.closest('li').dataset.id;
    // надпись на кнопке  Add to Favorite
    const favP = favButton.querySelector('.box-news__favorite-p');
    // svg
    const favSvg = favButton.querySelector('.box-news__favorite-svg');

    if (favButton.classList.contains('favorite')) {
      offColorBtn(favButton, favId, favP, favSvg);
    } else {
      onColorBtn(favButton, favId, favP, favSvg);
    }
  }
}

// Массив объектов getArray

function offColorBtn(favButton, favId, favP, favSvg) {
  for (const el of getArray()) {
    if (el.id === favId) {
      const resultDel = excludeFavoriteNew(el.id);

      if (resultDel) {
        favButton.classList.remove('favorite');
        favP.classList.remove('favorite-p');
        favSvg.classList.remove('favorite-svg');
        favP.textContent = 'Add to Favorite';
      }
      return;
    }
  }
}

function onColorBtn(favButton, favId, favP, favSvg) {
  for (const el of getArray()) {
    if (el.id === favId) {
      const resultAdd = includeFavoriteNew(el);

      if (resultAdd) {
        favButton.classList.add('favorite');
        favP.classList.add('favorite-p');
        favSvg.classList.add('favorite-svg');
        favP.textContent = 'Remove from Favorite';
      }
      return;
    }
  }
}

// Рзглаживаем вложенные массивы из нашего Л.С. в плоский массив.
function getArray() {
  let objRead = loadReadStorage();
  let arrRead = Object.values(objRead).flat();

  return arrRead;
}

// Функция для вызова заглушки
function renderNoNews(noResultsText) {
  const noNewsMarkUp = `<li class="no-results-wrap"><p class="no-results-text">${noResultsText}</p><span class="no-results-bgr"></span></li>`;
  box.innerHTML = noNewsMarkUp;
}
