// ------------Lyosha, Yura, Dima--------------
import axios from 'axios';
import debounce from 'lodash.debounce';

const box = document.querySelector('.box-news');
let arrCurrentNews = [];

const KEY = 'MaRHlqb5GkKZRi8GP7IZNIuwteQG5wDA';
const ENDPOINT = 'https://api.nytimes.com/svc/';

let page = 1;
let perPage = 4;

if (
  document.documentElement.clientWidth > 768 &&
  document.documentElement.clientWidth < 1280
) {
  perPage = 7;
  fetchPopularNews();
  console.log('Это статика');
  return;
} else if (document.documentElement.clientWidth > 1280) {
  perPage = 8;
  fetchPopularNews();
  console.log('Это статика - 2');
  return;
}

fetchPopularNews();

async function getPopularNews() {
  const URL = `${ENDPOINT}mostpopular/v2/viewed/1.json?api-key=${KEY}`;
  const {
    data: { results },
  } = await axios.get(URL);
  return results;
}

async function fetchPopularNews() {
  try {
    const results = await getPopularNews();

    displayItems(results);
    // createPopularNewsCollection(results);
  } catch (error) {
    console.log(error);
  }
}

window.addEventListener('resize', trackForResize);

function trackForResize(e) {
  const width = document.documentElement.clientWidth;
  console.log('width - ', width);
  if (width > 768 && width < 1280) {
    console.log('trackForResize');
    perPage = 7;
    fetchPopularNews();
  } else if (width > 1280) {
    perPage = 8;
    fetchPopularNews();
  }
}

function displayItems(arr) {
  const start = (page - 1) * perPage; // 0
  const end = start + perPage; // 5
  const paginatedEl = arr.slice(start, end);
  console.log('paginatedEl - ', paginatedEl);
  // console.log(arr);
  // console.log(paginatedEl);
   createPopularNewsCollection(paginatedEl); 
}

function createPopularNewsCollection(arr) {
  const markupNewsCollection = arr

    .map(el => {
      const { abstract, title, url, published_date, media, section, id } = el;
      const foto = media[0]['media-metadata'][2].url;
      const data = published_date.split('-').reverse().join('/');
      return `<li class="box-news__item" data-id="${id}">
      <p class="box-news__section">${section}</p>
          <div class="box-news___wrap-reading">
            <span class="box-news__reading">Alredy read</span>
            <svg class="icon" width="18" height="18">
              <use href="#icon-check"></use>
            </svg> 
          </div>
          <article>
            <div class="box-news__thumb">
              <img class="box-news__img" src="${foto}" loading="lazy" alt="${section}" width='440'/>
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
  arrCurrentNews = arr;
  // console.log('arrCurrentNews - ', arrCurrentNews);
}

box.addEventListener('click', onClick);

function onClick(e) {
  e.preventDefault();
  let currentId = null;

  console.dir(e.target);

  if (e.target.classList.value === 'box-news__link') {
    console.log('Мы нажали на Read more !');
    currentId = +e.target.id;

    for (const el of arrCurrentNews) {
      if (el.id === currentId) {
        console.log('el - ', el);
        console.log('Вызываем функцию - READ и передаем el !!');

        const ff = new Date()
          .toLocaleString()
          .slice(0, 10)
          .split('.')
          .join('/');
        // console.log('dateNow - ', dateNow);
        save(ff, el);

        const currentLi = e.target.closest('li');
        currentLi.classList.add('active');

        return;
      }
    }
  }
}

function save(key, value) {
  try {
    const serializedState = JSON.stringify(value);
    localStorage.setItem(key, serializedState);
  } catch (error) {
    console.error('Set state error: ', error.message);
  }
}

// function load(key) {
//   try {
//     const serializedState = localStorage.getItem(key);
//     return serializedState === null ? undefined : JSON.parse(serializedState);
//   } catch (error) {
//     console.error('Get state error: ', error.message);
//   }
// }
