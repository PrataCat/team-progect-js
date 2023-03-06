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

      if (resultDel) {
        favButton.classList.remove('favorite');
        favP.textContent = 'Add to Favorite';
      }
      return;
    }
  }
}

export function onColorBtn(favButton, favId, favP, favSvg) {
  for (const el of getArray()) {
    if (el.id === favId) {
      const resultAdd = includeFavoriteNew(el);

      if (resultAdd) {
        favButton.classList.add('favorite');
        favP.textContent = 'Remove from Favorite';
      }
      return;
    }
  }
}
