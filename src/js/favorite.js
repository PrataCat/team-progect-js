//------------Oleksiy Zhuravlev-----------

import { excludeFavoriteNew, loadAllFavorites } from './library.js';
import { creatCardMarkup } from './creatCardMarkup';

const box = document.querySelector('.box-news');

box.addEventListener('click', onClick);

function onClick(e) {
  const curTargetClass = e.target.classList.value;

  if (
    curTargetClass === 'box-news__btn' ||
    curTargetClass === 'box-news__btn-icon'
  ) {
    currentId = +e.target.id;

    excludeFavoriteNew(currentId);
    box.innerHTML = '';
    createPopularNewsCollection(loadAllFavorites());
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

function createPopularNewsCollection(arr) {
  if (typeof arr !== 'object') {
    return;
  }
  if (Array.isArray(arr) === false) {
    return;
  }

  perPage = cardsPerPage(); // замеряем ширину вью порта
  const arrCurrentNews = loadAllFavorites();
  const arrForMarkup = displayItems(arrCurrentNews, (page = 1), perPage); // массив для рендера на текущую страницу
  const cardMarkupArray = arrForMarkup.map(el => creatCardMarkup(el)); // массив готовой разметки карточек для рендера на текущую страницу

  // const markupNewsCollection = arr
  //   .map(el => {
  //     const { abstract, title, url, published_date, media, section, id } = el;
  //     // const foto = media[0]['media-metadata'][2].url;
  //     const foto = media[0] ? media[0]['media-metadata'][2].url : '';
  //     const data = published_date.split('-').reverse().join('/');
  //     return `<li class="box-news__item" data-id="${id}">
  //     <p class="box-news__section">${section}</p>
  //         <div class="box-news___wrap-reading">
  //           <span class="box-news__reading">Already read</span>
  //           <svg class="icon" width="18" height="18">
  //             <use href="#icon-check"></use>
  //           </svg>
  //         </div>
  //         <article>
  //           <div class="box-news__thumb">
  //             <img class="box-news__img" src="${foto}" loading="lazy" alt="${section}" width='440'/>
  //             <button class="box-news__btn" id="${id}">Remove from favorite
  //               <svg class="box-news__btn-icon" width="16" height="16" id="${id}">
  //                 <use href="../images/akar-icons_heart-filled.svg"></use>
  //               </svg>
  //             </button>
  //           </div>
  //         <div class="box-news__wrap-title">
  //           <h2 class="box-news__titel">
  //             ${title}
  //           </h2>
  //         </div>
  //         <div class="box-news__wrap-text">
  //           <p class="box-news__text">
  //             ${
  //               abstract.length > 120
  //                 ? abstract.slice(0, 110) + '...'
  //                 : abstract
  //             }
  //           </p>
  //         </div>
  //         <div class="box-news__wrap">
  //           <p class="box-news__data">${data}</p>
  //           <a href="${url}" id="${id}" class="box-news__link" target="_blank" rel="noopener noreferrer nofollow">Read more</a>
  //         </div>
  //         </article>
  //         <div class="overlay"></div>
  //       </li>`;
  //   })
  //   .join('');

  box.insertAdjacentHTML('beforeend', cardMarkupArray.join(''));
}

createPopularNewsCollection(loadAllFavorites());
