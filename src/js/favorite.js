//------------Oleksiy Zhuravlev-----------;
import { excludeFavoriteNew, loadAllFavorites } from './library.js';
import { creatCardMarkup } from './creatCardMarkup';
import { writeReadStorage } from './read-library';

const box = document.querySelector('.box-news');
const footerEl = document.querySelector('.footer');
const headerEl = document.querySelector('.header');

let noResultsText = 'The favorite news list is empty';

box.addEventListener('click', onFavoriteBtnClick);
box.addEventListener('click', onReadMoreBtnClick);

function onFavoriteBtnClick(e) {
  if (e.target.closest('.box-news__favorite-btn')) {
    const favId = e.target.closest('li').dataset.id;
    excludeFavoriteNew(favId);
    box.innerHTML = '';
    createPopularNewsCollection(loadAllFavorites());
  } return;
}

function onReadMoreBtnClick(e) {
  if (e.target.tagName === 'A') {
    let currentId = e.target.closest('li').dataset.id;
    let currentLi = e.target.closest('li');
    const favArray = loadAllFavorites();
    for (const el of favArray) {
      if (el.id === currentId) {
        writeReadStorage(el);
        currentLi.classList.add('show');
        return;
      }
    }
  }
}



// ф-ци возвращае ширину вью порта
function checkWidth() {
  return document.documentElement.clientWidth;
}

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

// ф-ция возвращает массив карточек для рендера на текущую страницу (из текущуго массива arrCurrentNews)
function displayItems(arr, page, perPage) {
  const start = (page - 1) * perPage;
  const end = start + perPage;
  const paginatedEl = arr.slice(start, end);
  return paginatedEl;
}

function renderNoNews(noResultsText) {
  const noNewsMarkUp = `<li class="no-results-wrap"><p class="no-results-text">${noResultsText}</p><span class="no-results-bgr"></span></li>`;
  box.innerHTML = noNewsMarkUp;
}

function createPopularNewsCollection(arr) {
  renderNoNews('The favorite news list is empty');

  if (typeof arr !== 'object') {
    return;
  }
  if (Array.isArray(arr) === false) {
    return;
  }

  let perPage = cardsPerPage(); // замеряем ширину вью порта
  const arrCurrentNews = loadAllFavorites();
  const arrForMarkup = displayItems(arrCurrentNews, 1, perPage); // массив для рендера на текущую страницу
  if (arrForMarkup.length === 0) {
  } else {
    const cardMarkupArray = arrForMarkup.map(el => creatCardMarkup(el)); // массив готовой разметки карточек для рендера на текущую страницу

    box.innerHTML = cardMarkupArray.join('');
  }
}

createPopularNewsCollection(loadAllFavorites());
