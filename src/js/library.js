const FAVORITE_STORAGE_KEY = 'Favorite';

export function includeFavoriteNew(theNew) {
  try {
    let curNewsArray = loadAllFavorites();
    if (
      typeof curNewsArray !== 'object' ||
      Array.isArray(curNewsArray) === false
    ) {
      curNewsArray = [];
      console.log(curNewsArray);
    }

    curNewsArray.unshift(theNew);
    saveFavorites(curNewsArray);
    return true;
  } catch (error) {
    console.error(error.message);
    return false;
  }
}

export function excludeFavoriteNew(newId) {
  try {
    const curNewsArray = loadAllFavorites();
    const foundIndex = curNewsArray.findIndex((elm, idx) => elm.id === newId);
    curNewsArray.splice(foundIndex, 1);
    saveFavorites(curNewsArray);
    return true;
  } catch (error) {
    console.error(error.message);
    return false;
  }
}

export function saveFavorites(arr) {
  const msg = 'Wrong data to save: array with objects is expected.';
  if (typeof arr !== 'object') {
    console.log(msg);
    return;
  }
  if (Array.isArray(arr) === false) {
    console.log(msg);
    return;
  }
  try {
    const serializedState = JSON.stringify(arr);
    localStorage.setItem(FAVORITE_STORAGE_KEY, serializedState);
  } catch (error) {
    console.error('Set state error: ', error.message);
  }
}

export function loadAllFavorites() {
  try {
    const serializedState = localStorage.getItem(FAVORITE_STORAGE_KEY);
    return serializedState === null ? undefined : JSON.parse(serializedState);
  } catch (error) {
    console.error(error.message);
  }
}
