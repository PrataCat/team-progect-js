// ------------Lyosha, Yura, Dima--------------
import { getMostPopularArticles } from './newsApiService';
import { creatCardMarkup } from './creatCardMarkup';
import { onButtonFavorite } from './favorite-btn-action';
import { onClickReadMore } from './readmore-action';
import { setFlags } from './actions-with-flags';
import Pagination from 'tui-pagination'; /* ES6 */
// import { includeFavoriteNew, excludeFavoriteNew } from './favorite';

const box = document.querySelector('.box-news');
const container = document.getElementById('tui-pagination-container');

box.addEventListener('click', onButtonFavorite);
box.addEventListener('click', onClickReadMore);

let arrayEl = null;

let currentDispleyWidth = checkWidth(); //текущая ширина вью порта
let arrCurrentNews = []; //копия массива поп новостей (или по категориям, или по серчу)
let pageList = 1;
let perPage = null; // текущая страница (для пагинации)

window.addEventListener('resize', onResize);

const options = {
  // totalItems: arrCurrentNews.length,
  itemsPerPage: cardsPerPage(),
  visiblePages: 8,
  page: 1,
  centerAlign: false,
  firstItemClassName: 'tui-first-child',
  lastItemClassName: 'tui-last-child',
  template: {
    page: `<a href="#" class="tui-page-btn">{{page}}</a>`,
    currentPage:
      '<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',
    moveButton:
      '<a href="#" class="tui-page-btn tui-{{type}}">' +
      '<span class="tui-ico-{{type}}">{{type}}</span>' +
      '</a>',
    disabledMoveButton:
      '<span class="tui-page-btn tui-is-disabled tui-{{type}}">' +
      '<span class="tui-ico-{{type}}">{{type}}</span>' +
      '</span>',
    moreButton:
      '<a href="#" class="tui-page-btn tui-{{type}}-is-ellip">' +
      '<span class="tui-ico-ellip">...</span>' +
      '</a>',
  },
};

const instance = new Pagination(container, options);

/*
основная ф-ция, создаем стартовую страницу, коллбеком передаем ф-цию 
которая возвращает норм. массив поп. новостей (или по категориям, или по серчу)
*/

createNewsCollection(getMostPopularArticles);

async function createNewsCollection(func) {
  // проверяем пустой ли массив "текущих" новостей

  if (arrCurrentNews.length === 0) {
    arrCurrentNews = await func();

    /* если нет - вызываем апи и заполняем массив 
    соответствующими новостями (по категориям или серчу)
    */
  }

  options.totalItems = arrCurrentNews.length;
  instance.reset(options.totalItems);

  instance.on('afterMove', event => {
    options.page = event.page;
    // instance.reset(options.page);
  });

  // кол-во perPage от ширины вьюпорта
  // perPage = cardsPerPage();

  // подготовили массив новостей на текущую страницу
  const arrForMarkup = displayItems(
    arrCurrentNews,
    options.page,
    options.itemsPerPage
  ); // массив для рендера на текущую страницу

  arrayEl = arrForMarkup;

  // устанавливаем флажки (favorite, read) на массив новостей
  let arrSetFlags = await setFlags(arrForMarkup);

  // готовим массив разметки для рендера текущих товостей
  let cardMarkupArray = arrSetFlags.map(el => creatCardMarkup(el)); // массив готовой разметки карточек для рендера на текущую страницу
  // if (currentDispleyWidth > 1280) {
  //   cardMarkupArray.splice(2, 0, `<li class="box-weather__item box "></li>`);
  //   return;
  // } else if (currentDispleyWidth > 768) {
  //   cardMarkupArray.splice(1, 0, `<li class="box-weather__item box "></li>`);
  //   return;
  // } else {
  //   cardMarkupArray.splice(0, 0, `<li class="box-weather__item box "></li>`);
  // }

  // // погода cardMarkupArray ('строка разменки погоды') splice(). но условие для мобилки!!!

  // рендер текущих новостей
  renderBoxNewMarkup(cardMarkupArray);
}

// замеряем ширину вью порта и определяем сколько рендрерить
// карточек на страницу, возвращаеи число для perPage
function cardsPerPage() {
  const width = checkWidth();

  if (width > 1280) {
    return 8;
  } else if (width > 768) {
    return 7;
  } else {
    return 4;
  }
}

// ф-ци возвращае ширину вью порта
function checkWidth() {
  return document.documentElement.clientWidth;
}

// ф-ция возвращает массив карточек для рендера на текущую страницу (из текущуго массива arrCurrentNews)
function displayItems(arr, page, perPage) {
  const start = (page - 1) * perPage;
  const end = start + perPage;
  const paginatedEl = arr.slice(start, end);
  return paginatedEl;
}

// ф-ция рендера текущих карточек на страницу и изменение кнопок
function renderBoxNewMarkup(arr) {
  box.innerHTML = '';
  box.insertAdjacentHTML('beforeend', arr.join(''));
}

/* ф-ция следит за текущей шириной экрана. и если она вышла за брэкпоинты
страница рендерится заново для текущей ширины экрана
*/
function onResize() {
  if (
    (currentDispleyWidth < 768 && checkWidth() >= 768) ||
    (currentDispleyWidth >= 768 &&
      currentDispleyWidth < 1280 &&
      (checkWidth() < 768 || checkWidth() >= 1280)) ||
    (currentDispleyWidth >= 1280 && checkWidth() < 1280)
  ) {
    createNewsCollection();
  }
}

// ф-ция возвращает текущий массив новостей
export function sendCurrentArray() {
  return arrayEl;
}
