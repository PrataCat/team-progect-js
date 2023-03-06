// ------------Lyosha, Yura, Dima--------------
import { getMostPopularArticles } from './newsApiService';
import { creatCardMarkup } from './creatCardMarkup';
import { onButtonFavorite } from './favorite-btn-action';
import { onClickReadMore } from './readmore-action';
import { setFlags } from './actions-with-flags';
// import { includeFavoriteNew, excludeFavoriteNew } from './favorite';

const box = document.querySelector('.box-news');

box.addEventListener('click', onButtonFavorite);
box.addEventListener('click', onClickReadMore);

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
    console.log("createNewsCollection  arrCurrentNews:", arrCurrentNews)
    
    /* если нет - вызываем апи и заполняем массив 
    соответствующими новостями (по категориям или серчу)
    */
  }
  perPage = cardsPerPage(); // замеряем ширину вью порта

  const arrForMarkup = displayItems(arrCurrentNews, page, perPage); // массив для рендера на текущую страницу
  // let cardMarkupArray = arrForMarkup.map(el => creatCardMarkup(el)); // массив готовой разметки карточек для рендера на текущую страницу

  // let array = [];

  // dadada(arrForMarkup);

  // function dadada(arr) {
  //   //   const btn = document.querySelector('.box-news__favorite-btn');
  //   const localArr = loadAllFavorites();
  //   const newArr = arr.forEach(el => {
  //     const local = localArr.some(item => el.id === item.id);
  //     if (local) {
  //       el.add = true;
  //       array.push(el);
  //     } else {
  //       el.add = false;
  //       array.push(el);
  //     }
  //   });
  // }
  //----------***----------------

  let arrSetFlags = await setFlags(arrForMarkup);
  console.log('Это лог из основного кода arrSetFlags --- ', arrSetFlags);
  
  

  //----------***----------------

  let cardMarkupArray = await arrSetFlags.map(el => creatCardMarkup(el)); // массив готовой разметки карточек для рендера на текущую страницу

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

// ф-ция рендера текущих карточек на страницу и изменение кнопок
function renderBoxNewMarkup(arr) {
  box.insertAdjacentHTML('beforeend', arr.join(''));
  // const favBtn = document.querySelectorAll('.box-news__favorite-btn');
  // for (const btn of favBtn) {
  //   if (btn.dataset.status === 'true') {
  //     btn.firstElementChild.textContent = 'Remove from Favorite';
  //     btn.classList.add('favorite');
  //   }
  // }
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
    createNewsCollection();
  }
}

// ф-ция возвращает текущий массив новостей
export function sendCurrentArray() {
  return arrCurrentNews;
}


