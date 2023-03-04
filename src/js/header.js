//------Vlad-------

refs = {
  header: document.querySelector('.header'),
  searchForm: document.querySelector('.search-form'),
  searchBtn: document.querySelector('.search-form__btn'),
  menuBtn: document.querySelector('.menu-btn'),
  menu: document.querySelector('.mobile-menu'),
  themeToggler: document.getElementById('theme-toggler')
};

refs.menuBtn.addEventListener('click', onMenuBtnClick);
refs.searchBtn.addEventListener('click', onSearchButtonClick);
refs.themeToggler.addEventListener('click', onThemeTogglerClick)

function onMenuBtnClick(event) {
  event.currentTarget.classList.toggle('isActive');
  // refs.header.classList.toggle();
  refs.menu.classList.toggle('isActive');
}

function onSearchButtonClick(event) {
  console.log('qqq');
  refs.searchForm.classList.add('isShown');
}

function onThemeTogglerClick(event) {
  if(!event.target.classList.contains('theme-toggler__toggle-icon')) {
    return;
  }
  document.body.classList.toggle('dark-theme')


  event.currentTarget.classList.toggle('isActive')
}