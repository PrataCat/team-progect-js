// ------------Misa & Stas--------------
import { createNewsCollection } from './news-list';
import { getCategoryArticles } from './newsApiService';

const debounce = require('lodash.debounce');
const KEY = '?api-key=OotKL5nYMsbXFbPHNmmUjf7brVnGZQ8G';
const URL = 'https://api.nytimes.com/svc/news/v3/content/section-list.json';

let categoriesArray = [];
let windowInnerWidth = window.innerWidth;
let currentCategory = '';

const mainCategoryList = document.querySelector('.filter__main-category-list');
const othersCategoryList = document.querySelector(
  '.filter__others-category-list'
);
const othersCategoryLisWrap = document.querySelector(
  '.filter__other-category-wrap'
);

onFetch();

// createNewsCollection(getCategoryArticles, 'books');

mainCategoryList.addEventListener('click', onChooseCategory);
mainCategoryList.addEventListener('click', onShowOthersCategories);
othersCategoryList.addEventListener('click', onSectionSelection);
window.addEventListener('resize', debounce(onReRender, 50));

function onFetch() {
  onFetchCategories()
    .then(({ results }) => {
      categoriesArray = results;
      createCategories(categoriesArray, windowInnerWidth);
    })
    .catch(error => {
      console.log(error);
    });
}

function onFetchCategories() {
  return fetch(`${URL}${KEY}`).then(res => {
    if (!res.ok) {
      throw new Error('error');
    }
    return res.json();
  });
}

function createCategories(categoriesArray, windowInnerWidth) {
  let amountOfMainCategories = 0;
  let nameForOthersBtn = '';
  if (windowInnerWidth >= 1280) {
    amountOfMainCategories = 6;
    nameForOthersBtn = 'Others';
  } else if (windowInnerWidth > 767 && windowInnerWidth < 1280) {
    amountOfMainCategories = 4;
    nameForOthersBtn = 'Others';
  } else if (windowInnerWidth <= 767) {
    amountOfMainCategories = 0;
    nameForOthersBtn = 'Categories';
  }
  createMarkupForCategories(
    categoriesArray,
    amountOfMainCategories,
    nameForOthersBtn
  );
}

function createMarkupForCategories(
  categoriesArray,
  amountOfMainCategories,
  nameForOthersBtn
) {
  let markupForMainCategoryList = '';
  let markupForOthersCategoryList = '';
  categoriesArray.map(({ display_name }, index) => {
    if (index < amountOfMainCategories) {
      markupForMainCategoryList += `<li class="filter__main-category-item"><button class="filter__main-category-btn">${display_name}  </button></li>`;
      return;
    }
    markupForOthersCategoryList += `<li class="filter__others-category-item"><button class="filter__others-category-btn">${display_name}</button></li>`;
  });
  mainCategoryList.innerHTML = markupForMainCategoryList;
  mainCategoryList.insertAdjacentHTML(
    'beforeend',
    `<li class="filter__other-category-item"><button class="filter__main-category-btn others-btn">${nameForOthersBtn}<svg class="filter__main-category-btn-icon"> <use href="../images/symbol-defs-mini.svg#icon-orig-mini-n-z"> </use> </svg>
</button></li>`
  );

  othersCategoryList.innerHTML = markupForOthersCategoryList;

  changeArrow();
}

function onChooseCategory(event) {
  toMarkCategoryBtn(event);
  const nameOfCategory = event.target.outerText;
  if (!(nameOfCategory === 'Others') && !(nameOfCategory === 'Categories')) {
    currentCategory = nameOfCategory.toLowerCase();
    createNewsCollection(getCategoryArticles, currentCategory);
  }
  console.log(currentCategory);
}

function toMarkCategoryBtn(event) {
  const categoryBtnArray = document.querySelectorAll(
    '.filter__main-category-btn'
  );
  for (const categoryBtn of categoryBtnArray) {
    if (categoryBtn.classList.contains('active')) {
      categoryBtn.classList.remove('active');
    }
  }
  if (event.target.localName === 'button') {
    event.target.classList.add('active');
  }
}

function onShowOthersCategories(event) {
  if (event.target.classList.contains('others-btn')) {
    event.stopPropagation();
    othersCategoryList.classList.toggle('visible');
    othersCategoryLisWrap.classList.toggle('visible');

    changeArrow();

    window.addEventListener('click', onCloseOthersCategories);
  }
}

function onSectionSelection(e) {
  if (e.target.localName === 'button') {
    let section = e.target.textContent;
    const othersLi = mainCategoryList.lastChild;
    const otherBtn = othersLi.firstChild;
    otherBtn.textContent = section;
    currentCategory = section.toLowerCase();
    createNewsCollection(getCategoryArticles, currentCategory);
  }
  console.log(currentCategory);
}

function onCloseOthersCategories(event) {
  if (
    othersCategoryList.classList.contains('visible') &&
    !event.target.classList.contains('filter__others-category-item') &&
    !event.target.classList.contains('filter__others-category-list')
  ) {
    othersCategoryList.classList.remove('visible');
    othersCategoryLisWrap.classList.remove('visible');
    window.removeEventListener('click', onCloseOthersCategories);
  }
}

function onReRender() {
  if (window.innerWidth >= 1280 && windowInnerWidth < 1280) {
    windowInnerWidth = window.innerWidth;
    createCategories(categoriesArray, windowInnerWidth);
  } else if (
    window.innerWidth > 767 &&
    window.innerWidth < 1280 &&
    (windowInnerWidth <= 767 || windowInnerWidth >= 1280)
  ) {
    windowInnerWidth = window.innerWidth;
    createCategories(categoriesArray, windowInnerWidth);
  } else if (window.innerWidth <= 767 && windowInnerWidth > 767) {
    windowInnerWidth = window.innerWidth;
    createCategories(categoriesArray, windowInnerWidth);
  }
}

//================== arrow filters ============
mainCategoryList.addEventListener('click', changeArrow);

function changeArrow() {
  let othersCategoryLisWrapClass =
    othersCategoryLisWrap.classList.contains('visible');

  const otherBtn = mainCategoryList.lastChild.firstChild;
  let otherBtnClass = otherBtn.classList.contains('active');

  const mainCategoryBtnIcon = mainCategoryList.lastChild.firstChild.children[0];

  if (!othersCategoryLisWrapClass && !otherBtnClass) {
    mainCategoryBtnIcon.classList.remove('white-up', 'white-down');
    mainCategoryBtnIcon.classList.add('blue-down');
  } else if (othersCategoryLisWrapClass && otherBtnClass) {
    mainCategoryBtnIcon.classList.remove('blue-down', 'white-down');
    mainCategoryBtnIcon.classList.add('white-up');
  } else if (otherBtnClass && !othersCategoryLisWrapClass) {
    mainCategoryBtnIcon.classList.remove('blue-down', 'white-up');
    mainCategoryBtnIcon.classList.add('white-down');
  }
}
