// ------------Lyosha, Yura, Dima--------------

// import axios from "axios"; // не работает

const box = document.querySelector('.box-news');

const KEY = 'MaRHlqb5GkKZRi8GP7IZNIuwteQG5wDA';
const ENDPOINT = 'https://api.nytimes.com/svc/';

async function getPopularNews() {
  const URL = `${ENDPOINT}mostpopular/v2/viewed/1.json?api-key=${KEY}`;

  const response = await fetch(URL);
  const data = await response.json();

  return data.results;
}

async function fetchPopularNews() {
  try {
    const results = await getPopularNews();
    console.log('fetchPopularNews  results:', results);

    createPopularNewsCollection(results);
  } catch (error) {
    console.log(error);
  }
}

fetchPopularNews();

function createPopularNewsCollection(arr) {
  const markupNewsCollection = arr
    .map(el => {
      const { abstract, title, url, published_date, media, section, id } = el;
      const foto = media[0]['media-metadata'][2].url;
      const data = published_date.split('-').reverse().join('/');

      return `<li class="box-news__item" id="${id}">
      <p class="box-news__section">${section}</p>
      <span class="box-news__reading">Already read<svg width="18"
              height="18"
            >
              <use
                href="./image/symbol-defs.svg"
              ></use></span>
          <article>
            <div class="box-news__thumb">
              <img class="box-news__img" src="${foto}" loading="lazy" alt="${section}" width='440'/>
            </div>
          <div class="box-news__wrap-title">
            <h2 class="box-news__titel">${title}</h2>
          </div>
          <p class="box-news__text">${
            abstract.length > 120 ? abstract.slice(0, 110) + '...' : abstract
          }</p>

          <div class="box-news__wrap">
            <p class="box-news__data">${data}</p>
            <a href="${url}" class="box-news__link" target="_blank" rel="noopener noreferrer nofollow">Read more</a>
          </div>
          </article>
        </li>`;
    })
    .join('');

  box.insertAdjacentHTML('beforeend', markupNewsCollection);
}