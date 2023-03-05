//-------Maks & Serj--------------
import {
  loadReadStorage,
  removeFromReadStorage,
  getCurrentDate,
} from './read-library';

import { creatCardMarkup } from './creatCardMarkup';

createReadMarkup();

function createReadMarkup() {
  const readObj = loadReadStorage();
  const keys = Object.keys(readObj);

  for (date of keys) {
    console.log(readObj[date]);

    // Удаление пустого массива из Л.С.
    if (readObj[date].length === 0) {
      delete readObj[date];

      localStorage.setItem('read', JSON.stringify(readObj));
      location.reload();
    }

    createDateBox(date);
  }
  for (date of Object.keys(readObj)) {
    const box = document.querySelector(`[data-date="${date}"]`);
    const wrapList = document.getElementById(`${date}`);
    console.log(wrapList);
    const murkupForBox = createMurkupForBoxItem();

    wrapList.insertAdjacentHTML('beforeend', murkupForBox.join(""));
  }
}

function createDateBox(date) {
  const wrapBox = document.querySelector('.wrap-box');
  const murkup = `<div data-date="${date}">
    <div class="span-wrap">
      <span class="date-span open">${date}<span class="arrow"></span></span>
    </div>
    <ul class="wrap-list box-news open" id="${date}"></ul>
  </div>`;

  const makeMurkup = wrapBox.insertAdjacentHTML('afterbegin', murkup);

  return;
}

function createMurkupForBoxItem() {
  const readObj = loadReadStorage();
  const getKeyValue = readObj[date]; //массив из объектов

  const createMurkup = getKeyValue.map(el => {
    const { abstract, title, url, published_date, image_url, section, id } = el;
    // const foto = media[0] ? media[0]['media-metadata'][2].url : '';
    const data = published_date.split('-').reverse().join('/');
    return creatCardMarkup(el);
  });

  return createMurkup;
}

console.log(createMurkupForBoxItem());

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
    // Змінити стиль елемента <ul>, щоб його приховати або показати(без анімації)
    // if (list.classList.contains('active')) {
    //   list.classList.remove('active');
    // } else {
    //   list.classList.add('active');
    // }
  });
});

export { writeReadStorage };
