//------------Oleksiy Zhuravlev-----------

import { excludeFavoriteNew, loadAllFavorites } from './library.js';

// const doubleButton = document.querySelector('.double-first-new');
// doubleButton.addEventListener('click', onDouble);

// function onDouble(params) {
//   const arr = loadAllFavorites();

//   const newToDuble = arr.slice(0, 1);

//   // console.log(newToDuble[0]);
//   includeFavoriteNew(newToDuble[0]);
//   box.innerHTML = '';
//   createPopularNewsCollection(loadAllFavorites());
// }

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

function createPopularNewsCollection(arr) {
  if (typeof arr !== 'object') {
    return;
  }
  if (Array.isArray(arr) === false) {
    return;
  }
  const markupNewsCollection = arr
    .map(el => {
      const { abstract, title, url, published_date, media, section, id } = el;
      // const foto = media[0]['media-metadata'][2].url;
      const foto = media[0] ? media[0]['media-metadata'][2].url : '';
      const data = published_date.split('-').reverse().join('/');
      return `<li class="box-news__item" data-id="${id}">
      <p class="box-news__section">${section}</p>
          <div class="box-news___wrap-reading">
            <span class="box-news__reading">Already read</span>
            <svg class="icon" width="18" height="18">
              <use href="#icon-check"></use>
            </svg> 
          </div>
          <article>
            <div class="box-news__thumb">
              <img class="box-news__img" src="${foto}" loading="lazy" alt="${section}" width='440'/>
              <button class="box-news__btn" id="${id}">Remove from favorite
                <svg class="box-news__btn-icon" width="16" height="16" id="${id}">
                  <use href="../images/akar-icons_heart-filled.svg"></use>
                </svg>
              </button>
            </div>
          <div class="box-news__wrap-title">
            <h2 class="box-news__titel">
              ${title}
            </h2>
          </div>
          <div class="box-news__wrap-text">
            <p class="box-news__text">
              ${
                abstract.length > 120
                  ? abstract.slice(0, 110) + '...'
                  : abstract
              }
            </p>
          </div>
          <div class="box-news__wrap">
            <p class="box-news__data">${data}</p>
            <a href="${url}" id="${id}" class="box-news__link" target="_blank" rel="noopener noreferrer nofollow">Read more</a>
          </div>
          </article>
          <div class="overlay"></div>
        </li>`;
    })
    .join('');

  box.insertAdjacentHTML('beforeend', markupNewsCollection);
}

createPopularNewsCollection(loadAllFavorites());
