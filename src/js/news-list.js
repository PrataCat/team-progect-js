// ------------Lyosha, Yura, Dima--------------
import { getMostPopularArticles, getSearchArticles } from './newsApiService';
import { creatCardMarkup } from './creatCardMarkup';
import { onButtonFavorite } from './favorite-btn-action';
import { onClickReadMore } from './readmore-action';
import { insertWeather } from './weather';
import { getSearchForm } from './header';
import { renderNoNews } from './calendar';
import Pagination from 'tui-pagination';
import { displayItems } from './utils/arrayCarsToRander';

const box = document.querySelector('.box-news');
const searchBtn = document.querySelector('.search-form__btn');
const paginationContainer = document.getElementById('tui-pagination-container');
const calendarInputEl = document.querySelector('#date-picker');
const loader = document.querySelector('.loader-container');

box.addEventListener('click', onButtonFavorite);
box.addEventListener('click', onClickReadMore);
window.addEventListener('resize', onResize);

let currentDispleyWidth = window.innerWidth; //текущая ширина вью порта
let arrCurrentNews = []; // массива всех новостей полученных от АПИ
let searchArticles = []; // массив новостей полученых по поиску
let arrForMarkup = []; // массив для рендера на текущую страницу

// настройки пагинатора
let options = {
  itemsPerPage: cardsPerPage(),
  visiblePages: 4,
  page: 1,
  centerAlign: false,
  firstItemClassName: 'tui-first-child',
  lastItemClassName: 'tui-last-child',
  template: {
    page: '<a href="#" class="tui-page-btn pag">{{page}}</a>',
    currentPage:
      '<strong class="tui-page-btn tui-is-selected pag">{{page}}</strong>',
    moveButton:
      '<a href="#" class="tui-page-btn tui-{{type}} pag">' +
      '<span class="tui-ico-{{type}} pag">{{type}}</span>' +
      '</a>',
    disabledMoveButton:
      '<a class="tui-page-btn tui-is-disabled tui-{{type}} pag">' +
      '<span class="tui-ico-{{type}} pag">{{type}}</span>' +
      '</a>',
    moreButton:
      '<a href="#" class="tui-page-btn tui-{{type}}-is-ellip pag">' +
      '<span class="tui-ico-ellip pag">...</span>' +
      '</a>',
  },
};

const pagination = new Pagination(paginationContainer, options);

pagination.on('beforeMove', event => {
  options.page = event.page;
  pagination.reset(options.page);
  createNewsCollection();

  window.scrollTo({
    top: 0,
    left: 0,
    behavior: 'smooth',
  });
});

createNewsCollection(getMostPopularArticles);

searchBtn.addEventListener('click', onSearchButtonClick);

export async function createNewsCollection(func, value) {
  // проверяем пустой ли массив "текущих" новостей
  if (arrCurrentNews.length === 0) {
    arrCurrentNews = await func(value);
    // если нет - получаем новости от pop
  }
  // или другие новости
  if (!(arrCurrentNews.length === 0) && value) {
    arrCurrentNews = await func(value);
  }

  options.itemsPerPage = cardsPerPage();
  pagination.reset(options.itemsPerPage);

  options.totalItems = arrCurrentNews.length;
  pagination.reset(options.totalItems);

  // вырезали часть масива новостей для рендера текущей страницы
  arrForMarkup = displayItems(
    arrCurrentNews,
    options.page,
    options.itemsPerPage
  );

  // готовим массив разметки для рендера текущих товостей и погоды
  const cardMarkupArray = arrForMarkup.map(el => creatCardMarkup(el)); // массив готовой разметки карточек для рендера на текущую страницу

  if (currentDispleyWidth > 1280) {
    cardMarkupArray.splice(2, 0, `<li class="box-weather__item box "></li>`);
  } else if (currentDispleyWidth > 768) {
    cardMarkupArray.splice(1, 0, `<li class="box-weather__item box "></li>`);
  } else {
    cardMarkupArray.splice(0, 0, `<li class="box-weather__item box "></li>`);
  }

  // рендер текущих новостей
  renderBoxNewMarkup(cardMarkupArray);

  //рендер погоды
  insertWeather();

  // loader
  setTimeout(() => {
    loader.classList.add('is-hidden');
  }, 700);
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

// ф-ция рендера текущих карточек на страницу
function renderBoxNewMarkup(arr) {
  box.innerHTML = arr.join('');
}

// ф-ция возвращает текущий массив новостей
export function sendCurrentArray() {
  return arrForMarkup;
}
/////////////////////////

async function onSearchButtonClick(event) {
  event.preventDefault();

  const searchForm = document.getElementById('search-form');

  if (window.innerWidth < 768 && searchForm.classList.contains('closed')) {
    searchForm.classList.remove('closed');
    setTimeout(hideSearchInput, 5000);
    return;
  }

  if (!searchForm[0].value) {
    console.log('field is empty');
    return;
  }

  let calendarInputValue = calendarInputEl.value.trim();

  try {
    let searchData = await getSearchArticles(searchForm[0].value);

    if (calendarInputValue.length !== 0) {
      arrCurrentNews = searchData.filter(
        item => item.published_date === calendarInputValue
      );
    } else {
      arrCurrentNews = searchData;
    }
  } catch (error) {
    arrCurrentNews = [];
  }

  if (arrCurrentNews.length === 0) {
    renderNoNews('Ooops.. We haven’t found news for your request.');
    return;
  }

  const searchArticlesCardsMarkup = arrCurrentNews.map(item =>
    creatCardMarkup(item)
  );

  options.itemsPerPage = cardsPerPage();
  pagination.reset(options.itemsPerPage);

  options.totalItems = arrCurrentNews.length;
  pagination.reset(options.totalItems);

  arrForMarkup = displayItems(
    arrCurrentNews,
    options.page,
    options.itemsPerPage
  );

  const cardMarkupArray = arrCurrentNews.map(el => creatCardMarkup(el)); // массив готовой разметки карточек для рендера на текущую страницу
  if (currentDispleyWidth > 1280) {
    cardMarkupArray.splice(2, 0, `<li class="box-weather__item box "></li>`);
  } else if (currentDispleyWidth > 768) {
    cardMarkupArray.splice(1, 0, `<li class="box-weather__item box "></li>`);
  } else {
    cardMarkupArray.splice(0, 0, `<li class="box-weather__item box "></li>`);
  }

  renderBoxNewMarkup(cardMarkupArray);

  insertWeather();
  const inputSearch = document.querySelector('.search-form');
  inputSearch.reset();
}

function hideSearchInput() {
  const searchForm = getSearchForm();
  if (!searchForm.classList.contains('closed') && !searchForm[0].value) {
    searchForm.classList.add('closed');
    return;
  }
}
