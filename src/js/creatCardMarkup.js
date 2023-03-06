import { loadAllFavorites } from './library';
import { loadReadStorage } from './read-library';

function creatCardMarkup(el) {
  const { abstract, title, url, published_date, image_url, section, id } = el;

  const flags = checkRead(el);

  return `<li class="box-news__item ${
    flags.read ? 'show' : ''
  }" data-id="${id}">
      <p class="box-news__section">${section}</p>
          <div class="box-news___wrap-reading">
            <span class="box-news__reading">Alredy read</span>
            <svg class="icon" width="18" height="18">
              <use href="#icon-check"></use>
            </svg> 
          </div>
          <button class="box-news__favorite-btn ${flags.fav ? 'favorite' : ''}">
              <p class="box-news__favorite-p"> ${
                flags.fav ? 'Remove from Favorite' : 'Add to Favorite'
              }</p>
              <svg class="box-news__favorite-svg" width="16" height="16"">
                <use href="#icon-heart"></use>
              </svg>
            </button>
          <article>
            <div class="box-news__thumb">
              <img class="box-news__img" src="${image_url}" loading="lazy" alt="${section}" width='440'/>
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
            <p class="box-news__data">${published_date}</p>
            <a href="${url}" class="box-news__link" target="_blank" rel="noopener noreferrer nofollow">Read more</a>
          </div>
          </article>
          <div class="overlay"></div>
        </li>`;
}

export { creatCardMarkup };

function checkRead(obj) {
  let arrFav = loadAllFavorites() || [];

  let objRead = loadReadStorage() || {};
  let arrRead = Object.values(objRead).flat();

  const answer = arrFav.find(item => obj.id === item.id);

  const reply = arrRead.find(i => obj.id === i.id);

  return (rezult = {
    fav: answer ? true : false,
    read: reply ? true : false,
  });
}
