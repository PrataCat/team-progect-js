import debounce from 'lodash.debounce';

import sprite from '/src/images/header-sprite.svg';

let documentWidth = window.innerWidth;
setCurrentPageUnderline();
renderSearch();
renderMenuButton();
renderThemeToggler();
setPageTheme();

const menuBtn = document.querySelector('.menu-btn');

menuBtn.addEventListener('click', onMenuBtnClick);

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

function createSearchMarkup() {
  return `
    <form class="search-form closed" id="search-form">
      <input type="text" class="search-form__input" placeholder=".">
      <button type="submit" class="search-form__btn">
        <svg class="search-form__icon" width="20px" height="20px">
          <use href="${sprite}#icon-search"></use>
        </svg>
      </button>
      <span class="search-form__placeholder">Search</span>
    </form>
  `;
}

function renderSearch() {
  if (getCurrentPagePath() !== '/index.html') {
    return;
  }
  const headerContainer = document.querySelector('.header .container');
  headerContainer.insertAdjacentHTML('beforeEnd', createSearchMarkup());
}

function renderMenuButton() {
  const headerContainer = document.querySelector('.header .container');
  headerContainer.insertAdjacentHTML('beforeEnd', createMenuBtnMarkup());
}

function createMenuBtnMarkup() {
  return `<button class="menu-btn">
      <span class="menu-btn__line menu-btn__line--1"></span>
      <span class="menu-btn__line menu-btn__line--2"></span>
      <span class="menu-btn__line menu-btn__line--3"></span>
    </button>`;
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
  const location = document.location.pathname;

  return location;
}

function setCurrentPageUnderline() {
  console.log(document.location.pathname);
  const currentPageNavLink = document.querySelector(
    `.nav__link[href*="${document.location.pathname}"]`
  );
  console.log(currentPageNavLink);
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

export function getSearchForm() {
  return document.getElementById('search-form');
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
