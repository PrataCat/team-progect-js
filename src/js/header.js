//------Vlad-------

refs = {
  header: document.querySelector('.header'),
  searchForm: document.querySelector('.search-form'),
  searchBtn: document.querySelector('.search-form__btn'),
  menuBtn: document.querySelector('.menu-btn'),
  menu: document.querySelector('.mobile-menu'),
};

refs.menuBtn.addEventListener('click', onMenuBtnClick);
refs.searchBtn.addEventListener('click', onSearchButtonClick);

function onMenuBtnClick(event) {
  event.currentTarget.classList.toggle('isActive');
  // refs.header.classList.toggle();
  refs.menu.classList.toggle('isActive');
}

function onSearchButtonClick(event) {
  console.log('qqq');
  refs.searchForm.classList.add('isShown');
}
