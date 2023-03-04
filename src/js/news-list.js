// ------------Lyosha, Yura, Dima--------------
import { getMostPopularArticles } from './newsApiService';
import { creatCardMarkup } from './creatCardMarkup';

// ф - ция проверки апишки поп новостей, возвращает нормализованный массив карточек
// top();
// async function top() {
//   const ddd = await getMostPopularArticles();
//   console.log(ddd);
// }

// const dd = creatCardMarkup(123)
// console.log(dd);

const box = document.querySelector('.box-news');

let currentDispleyWidth = checkWidth(); //текущая ширина вью порта
let arrCurrentNews = []; //копия массива поп новостей (или по категориям, или по серчу)
let page = 1;
let perPage = null; // текущая страница (для пагинации)

window.addEventListener('resize', onResize);

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
  perPage = cardsPerPage(); // замеряем ширину вью порта

  const arrForMarkup = displayItems(arrCurrentNews, page, perPage); // массив для рендера на текущую страницу
  const cardMarkupArray = arrForMarkup.map(el => creatCardMarkup(el)); // массив готовой разметки карточек для рендера на текущую страницу

  // // погода cardMarkupArray ('строка разменки погоды') splice(). но условие для мобилки!!!
  renderBoxNewMarkup(cardMarkupArray); // рендер текущей страницы
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

// ф-ция рендера текущих карточек на страницу
function renderBoxNewMarkup(arr) {
  box.insertAdjacentHTML('beforeend', arr.join(''));
  // box.innnerHTML = arr.join('');
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
    // page += 1;
    createNewsCollection();
  }
}

/*********************** button ********************************/

box.addEventListener('click', onClick);

function onClick(e) {
  e.preventDefault();
  // const currentId = e.target.closest('li').dataset.id
  let currentId = null;
  let currentLi = null;
  // console.dir(e.target);

  if (e.target.tagName === 'A') {
    // console.log('Мы нажали на Read more !');

    currentId = e.target.closest('li').dataset.id;
    currentLi = e.target.closest('li');

    console.log(currentLi);
    console.log('currentId - ', currentId);

    for (const el of arrCurrentNews) {
      if (el.id === currentId) {
        console.log('Мы нашли ID и вызываем ф-цию READ (include...)');
        currentLi.classList.add('active');
        return;
      }
      console.log('Все пропало шеф!!!');
    }
  }
}

/*********************************************************/
box.addEventListener('click', onButtonFavorite);

function onButtonFavorite(e) {
  if (e.target.closest('BUTTON')) {
    const favButton = e.target.closest('BUTTON');
    // const favLi = favButton.closest('li');
    const favP = favButton.querySelector('.box-news__favorite-p');
    const favSvg = favButton.querySelector('.box-news__favorite-svg');
    favSvg.style.fill = 'none';
    if (
      !e.target.closest('BUTTON').classList.contains('box-news__favorite-btn')
    ) {
      return;
    }
    if (favButton.classList.contains('favorite')) {
      favButton.classList.remove('favorite');
      favP.classList.remove('favorite-p');
      favSvg.classList.remove('favorite-svg');
      favP.textContent = 'Add to Favorite';
      favSvg.style.fill = 'none';
    } else {
      favButton.classList.add('favorite');
      favP.classList.add('favorite-p');
      favSvg.classList.add('favorite-svg');
      favP.textContent = 'Remove from Favorite';
      favSvg.style.fill = '#4B48DA';
    }
  }
}

/***********************************************************/
