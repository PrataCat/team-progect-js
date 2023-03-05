//-------Maks & Serj--------------

function loadReadStorage() {
  try {
    const storageRead = localStorage.getItem('read');

    return storageRead === null ? {} : JSON.parse(storageRead);
  } catch (error) {
    console.log(error);
  }
}
// Функция
function writeReadStorage(object) {
  removeFromReadStorage(object);
  const readObj = loadReadStorage();
  const curDate = getCurrentDate();
  if (!readObj[curDate]) {
    readObj[curDate] = [];
  }
  readObj[curDate].push(object);

  localStorage.setItem('read', JSON.stringify(readObj));
}

function removeFromReadStorage(obj) {
  const readObj = loadReadStorage();

  for (key of Object.keys(readObj)) {
    const indexInArray = readObj[key].findIndex(item => item.id === obj.id);
    if (indexInArray > -1) {
      console.log(readObj[key]);
      readObj[key].splice(indexInArray, 1);
    }
  }
  localStorage.setItem('read', JSON.stringify(readObj));
}

function getCurrentDate() {
  return new Date().toLocaleString().slice(0, 10).split('.').join('/');
}

createReadMarkup();

function createReadMarkup() {
  const readObj = loadReadStorage();
  const keys = Object.keys(readObj);

  for (date of keys) {
    console.log(readObj[date]);

    // Удаление пустого массива из Л.С.
    if (readObj[date].length === 0) {
      delete readObj[date];

      localStorage.setItem('read', JSON.stringify(readObj));
    }

    createDateBox(date);
  }
  for (date of Object.keys(readObj)) {
    const box = document.querySelector(`[data-date="${date}"]`);
    const wrapList = document.getElementById(`${date}`);
    console.log(wrapList);
    const murkupForBox = createMurkupForBoxItem();

    wrapList.insertAdjacentHTML('beforeend', murkupForBox);
  }
}

function createDateBox(date) {
  const wrapBox = document.querySelector('.wrap-box');
  const murkup = `<div data-date="${date}">
    <div class="span-wrap">
      <span class="date-span open">${date}<span class="arrow"></span></span>
    </div>
    <ul class="wrap-list box-news" id="${date}"></ul>
  </div>`;

  const makeMurkup = wrapBox.insertAdjacentHTML('afterbegin', murkup);

  return;
}


function createMurkupForBoxItem() {
  const readObj = loadReadStorage();
  const getKeyValue = readObj[date];

  const createMurkup = getKeyValue
    .map(el => {
      const { abstract, title, url, published_date, media, section, id } = el;
      const foto = media[0] ? media[0]['media-metadata'][2].url : '';
      const data = published_date.split('-').reverse().join('/');
      return `<li class="box-news__item" data-id="${id}">
      <p class="box-news__section">${section}</p>
          <div class="box-news___wrap-reading">
            <span class="box-news__reading">Alredy read</span>
            <svg class="icon" width="18" height="18">
              <use href="#icon-check"></use>
            </svg> 
          </div>
            <button id="favorite-btn" class="box-news__favorite-btn">
              <p id="favorite-p" class="box-news__favorite-p">Add to Favorite</p>
              <svg class="box-news__favorite-svg" width="16" height="16" id="favorite-svg">
                <use href="#icon-heart"></use>
              </svg>
            </button>
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
  return createMurkup;
}

const dateSpans = document.querySelectorAll('.date-span');
dateSpans.forEach(dateSpan => {
  dateSpan.addEventListener('click', function () {
    // Отримати ідентифікатор 'id' елемента <ul> за допомогою атрибуту 'id'
    const id = this.parentElement.parentElement.querySelector('ul').id;
    // Отримати елемент <ul> а допомогою ідентифікатора 'id'
    const list = document.getElementById(id);
    const arrow = dateSpan.querySelector('.arrow');
    arrow.classList.toggle('arrow-bot');
    list.classList.toggle('open');
    // Змінити стиль елемента <ul>, щоб його приховати або показати(без анімації)
    // if (list.classList.contains('active')) {
    //   list.classList.remove('active');
    // } else {
    //   list.classList.add('active');
    // }
  });
});

export { writeReadStorage ,loadReadStorage, removeFromReadStorage  };