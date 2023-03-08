import debounce from 'lodash.debounce';
import { getSearchArticles } from './newsApiService';

import sprite from '/src/images/header-sprite.svg';


let documentWidth = window.innerWidth;
setCurrentPageUnderline();
renderThemeToggler();
setPageTheme();

const searchBtn = document.querySelector('.search-form__btn');
const menuBtn = document.querySelector('.menu-btn');

menuBtn.addEventListener('click', onMenuBtnClick);
searchBtn.addEventListener('click', onSearchButtonClick);

window.addEventListener(
  'resize',
  debounce(() => {
    if (checkResizeBreakpoint(documentWidth)) {
      onResizeFunction();
    }
  }, 100)
);

function onResizeFunction() {
  if (!getCurrentToggler().parentElement !== getThemeTogglerOuterContainer()) {
    removeThemeToggler();
    renderThemeToggler();
    setPageTheme();
  }
}

function checkResizeBreakpoint() {
  const newDocumentWidth = window.innerWidth;

  const checkResult =
    (documentWidth < 768 && newDocumentWidth >= 768) ||
    (documentWidth >= 768 &&
      documentWidth < 1280 &&
      (newDocumentWidth < 768 || newDocumentWidth >= 1280)) ||
    (documentWidth >= 1280 && newDocumentWidth < 1280);

  documentWidth = newDocumentWidth;

  return checkResult;
}

export function getCurrentPagePath() {
  return document.location.pathname;
}

function setCurrentPageUnderline() {
  const currentPageNavLink = document.querySelector(
    `.nav__link[href="${getCurrentPagePath()}"]`
  );
  currentPageNavLink.classList.add('nav__link--current');
}

function getMobileMenu() {
  return document.querySelector('.mobile-menu');
}

function onMenuBtnClick(event) {
  event.currentTarget.classList.toggle('isOpen');
  getMobileMenu().classList.toggle('isOpen');
  getSearchForm().classList.toggle('isHidden');
  document.body.classList.toggle('js-scrollBlock');
}

function getSearchForm() {
  return document.getElementById('search-form');
}

async function onSearchButtonClick(event) {
  event.preventDefault();

  const searchForm = getSearchForm();

  if (window.innerWidth < 768 && searchForm.classList.contains('closed')) {
    searchForm.classList.remove('closed');
    setTimeout(hideSearchInput, 5000);
    return;
  }

  if (!searchForm[0].value) {
    console.log('field is empty');
    return;
  }

  if (getCurrentPagePath() !== '/index.html') {
    window.location.href = '/index.html';
  }

  const searchArticles = await getSearchArticles(searchForm[0].value);
  console.log(searchArticles);
}

function hideSearchInput() {
  const searchForm = getSearchForm();
  if (!searchForm.classList.contains('closed') && !searchForm[0].value) {
    searchForm.classList.add('closed');
    return;
  }
}

//  Theme-toggler functions :

function createThemeTogglerMarkup() {
  return `
<div class="theme-toggler" id="theme-toggler">
  <div class="theme-toggler__preinfo">
    <svg class="theme-toggler__icon" width="20px" height="20px">
      <use href="${sprite}#icon-light-theme"></use>
    </svg>
    <span class="theme-toggler__text">Light</span>
  </div>

  <div class="theme-toggler__toggle-icon"></div>

  <div class="theme-toggler__postinfo">
    <svg class="theme-toggler__icon" width="20px" height="20px">
      <use href="${sprite}#icon-dark-theme"></use>
    </svg>
    <span class="theme-toggler__text">Dark</span>
  </div>
</div>`;
}

function getThemeTogglerOuterContainer() {
  return document.querySelector(
    window.innerWidth < 768 ? '.mobile-menu' : '.header .container'
  );
}

function renderThemeToggler() {
  if (getCurrentToggler()) {
    return;
  }
  getThemeTogglerOuterContainer().insertAdjacentHTML(
    'beforeend',
    createThemeTogglerMarkup()
  );
  getCurrentToggler().addEventListener('click', onThemeTogglerClick);
}

function getCurrentToggler() {
  return document.getElementById('theme-toggler');
}

function removeThemeToggler() {
  getCurrentToggler().removeEventListener('click', onThemeTogglerClick);
  getCurrentToggler().remove();
}

function onThemeTogglerClick(event) {
  if (!event.target.classList.contains('theme-toggler__toggle-icon')) {
    return;
  }
  switchPageTheme();
}

// Theme render functions

function getThemeFromLocalStorage() {
  return localStorage.getItem('theme') || 'light';
}

function setThemeToLocalStorage(theme) {
  localStorage.setItem('theme', theme);
}

function setPageTheme() {
  const currentTheme = getThemeFromLocalStorage();

  if (currentTheme === 'light') {
    return;
  } else {
    getCurrentToggler().classList.add('isActive');
    document.body.classList.add('dark-theme');
  }
}

function switchPageTheme() {
  getCurrentToggler().classList.toggle('isActive');
  document.body.classList.toggle('dark-theme');

  setThemeToLocalStorage(
    getCurrentToggler().classList.contains('isActive') ? 'dark' : 'light'
  );
}
