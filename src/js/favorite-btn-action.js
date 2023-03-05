export { onButtonFavorite };
import { sendCurrentArray as getArray } from './news-list';
import { includeFavoriteNew, excludeFavoriteNew } from './library';

function onButtonFavorite(e) {
  if (e.target.closest('BUTTON')) {
    const favButton = e.target.closest('BUTTON');
    const favId = favButton.closest('li').dataset.id;
    const favP = favButton.querySelector('.box-news__favorite-p');
    const favSvg = favButton.querySelector('.box-news__favorite-svg');

    if (favButton.classList.contains('favorite')) {
      offColorBtn(favButton, favId, favP, favSvg);
    } else {
      onColorBtn(favButton, favId, favP, favSvg);
    }
  }
}

function offColorBtn(favButton, favId, favP, favSvg) {
  for (const el of getArray()) {
    if (el.id === favId) {
      const resultDel = excludeFavoriteNew(el.id);

      // const resultDel = true;
      if (resultDel) {
        console.log('Удалил');
        favButton.classList.remove('favorite');
        favP.classList.remove('favorite-p');
        favSvg.classList.remove('favorite-svg');
        favP.textContent = 'Add to Favorite';
      }
      return;
    }
  }
}

function onColorBtn(favButton, favId, favP, favSvg) {
  for (const el of getArray()) {
    if (el.id === favId) {
      const resultAdd = includeFavoriteNew(el);

      // const resultAdd = true;
      if (resultAdd) {
        console.log('Добавил');
        favButton.classList.add('favorite');
        favP.classList.add('favorite-p');
        favSvg.classList.add('favorite-svg');
        favP.textContent = 'Remove from Favorite';
      }
      return;
    }
  }
}
