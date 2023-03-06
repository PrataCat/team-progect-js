import { sendCurrentArray as getArray } from './news-list';
import { loadAllFavorites } from './library';
import { loadReadStorage } from './read-library';

export async function setFlags(arr) {
  let arrCurrent = arr; //getArray();
  let arrFav = loadAllFavorites();
  let objRead = loadReadStorage();
  let arrRead = Object.values(objRead).flat();

  arrCurrent.map(el => {
    if (arrFav) {
      const answer = arrFav.some(item => el.id === item.id);
      if (answer) el.favor = true;

      if (arrRead) {
        const reply = arrRead.some(i => el.id === i.id);
        if (reply) el.read = true;
        return;
      }
    } else {
      if (arrRead) {
        const reply = arrRead.some(i => el.id === i.id);
        if (reply) el.read = true;
      }
    }
  });
  return arrCurrent;
}
