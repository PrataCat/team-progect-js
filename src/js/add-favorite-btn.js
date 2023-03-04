export function onButtonFavorite(e) {
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
  for (const el of arrCurrentNews) {
    if (el.id === favId) {
      // const resaultDel = excludeFavoriteNew(el.id);

      const resaultDel = true;
      if (resaultDel) {
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
  for (const el of arrCurrentNews) {
    if (el.id === favId) {
      // const resaultAdd = excludeFavoriteNew(el);

      const resaultAdd = true;
      if (resaultAdd) {
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
