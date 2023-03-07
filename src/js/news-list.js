// ------------Lyosha, Yura, Dima--------------
import { getMostPopularArticles } from './newsApiService';
import { creatCardMarkup } from './creatCardMarkup';
import { onButtonFavorite } from './favorite-btn-action';
import { onClickReadMore } from './readmore-action';

//-----------------------------
import Pagination from 'tui-pagination';

// ------------------------------ pagination-----------------------------

//-------------------------------------------------
const box = document.querySelector('.box-news');

box.addEventListener('click', onButtonFavorite);
box.addEventListener('click', onClickReadMore);
window.addEventListener('resize', onResize);

let currentDispleyWidth = window.innerWidth; //текущая ширина вью порта
let arrCurrentNews = []; // массива всех новостей полученных от АПИ
let arrForMarkup = []; // массив для рендера на страницу
// let page = 1;
// let perPage = null; // текущая страница (для пагинации)

// ------------------------ paginetion----------------------------
const container = document.getElementById('tui-pagination-container');

let options = {
  // below default value of options
  // totalItems: arrCurrentNews.length,
  itemsPerPage: cardsPerPage(),
  visiblePages: 8,
  page: 1,
  centerAlign: false,
  firstItemClassName: 'tui-first-child',
  lastItemClassName: 'tui-last-child',
  template: {
    page: '<a href="#" class="tui-page-btn">{{page}}</a>',
    currentPage:
      '<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',
    moveButton:
      '<a href="#" class="tui-page-btn tui-{{type}}">' +
      '<span class="tui-ico-{{type}}">{{type}}</span>' +
      '</a>',
    disabledMoveButton:
      '<p class="tui-page-btn tui-is-disabled tui-{{type}}">' +
      '<span class="tui-ico-{{type}}">{{type}}</span>' +
      '</p>',
    moreButton:
      '<a href="#" class="tui-page-btn tui-{{type}}-is-ellip">' +
      '<span class="tui-ico-ellip">...</span>' +
      '</a>',
  },
};

const pag = new Pagination(container, options);

pag.on('beforeMove', event => {
  options.page = event.page;
  pag.reset(options.page);
  createNewsCollection();

  window.scrollTo({
    top: 0,
    left: 0,
    behavior: 'smooth',
  });
});

createNewsCollection(getMostPopularArticles);

export async function createNewsCollection(func, value) {
  // проверяем пустой ли массив "текущих" новостей
  if (arrCurrentNews.length === 0) {
    arrCurrentNews = await func(value);
    // если нет - получаем новости от АПИ
  }

  options.itemsPerPage = cardsPerPage();
  pag.reset(options.itemsPerPage);

  options.totalItems = arrCurrentNews.length;
  pag.reset(options.totalItems);

  // кол-во perPage от ширины вьюпорта
  // perPage = cardsPerPage();
  // console.log('perPage - ', perPage);

  // вырезали часть масива новостей для рендера текущей страницы
  arrForMarkup = displayItems(
    arrCurrentNews,
    options.page,
    options.itemsPerPage
  ); // массив для рендера на текущую страницу
  console.log('cardsPerPage()', cardsPerPage());

  // готовим массив разметки для рендера текущих товостей
  const cardMarkupArray = arrForMarkup.map(el => creatCardMarkup(el)); // массив готовой разметки карточек для рендера на текущую страницу
  // if (currentDispleyWidth > 1280) {
  //   cardMarkupArray.splice(2, 0, `<li class="box-weather__item box "></li>`);
  // } else if (currentDispleyWidth > 768) {
  //   cardMarkupArray.splice(1, 0, `<li class="box-weather__item box "></li>`);
  // } else {
  //   cardMarkupArray.splice(0, 0, `<li class="box-weather__item box "></li>`);
  // }

  // рендер текущих новостей
  renderBoxNewMarkup(cardMarkupArray);
  // turnPages();
}

// замеряем ширину вью порта и определяем сколько рендрерить
// карточек на страницу, возвращаеи число для perPage
function cardsPerPage() {
  if (currentDispleyWidth > 1280) {
    return 8;
  } else if (currentDispleyWidth > 768) {
    return 7;
  } else {
    return 4;
  }
}

/* ф-ция следит за текущей шириной экрана. и если она вышла за брэкпоинты
страница рендерится заново для текущей ширины экрана
*/
function onResize() {
  const width = window.innerWidth;
  if (
    (currentDispleyWidth < 768 && width >= 768) ||
    (currentDispleyWidth >= 768 &&
      currentDispleyWidth < 1280 &&
      (width < 768 || width >= 1280)) ||
    (currentDispleyWidth >= 1280 && width < 1280)
  ) {
    currentDispleyWidth = width;
    createNewsCollection();
  }
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

// ф-ция возвращает текущий массив новостей
export function sendCurrentArray() {
  return arrForMarkup;
}
