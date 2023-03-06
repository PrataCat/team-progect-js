import { sendCurrentArray as getArray } from './news-list';
import { loadAllFavorites } from './library';
import { loadReadStorage } from './read-library';

// const arr = loadReadStorage();
// console.log(arr);

export async function setFlags() {
  let arrCurrent = await getArray();
  let arrFav = await loadAllFavorites();
  let objRead = await loadReadStorage();
  let arrRead = Object.values(objRead)[0];
  console.log('setFlags  arrRead:', objRead);

  // console.log(arrFav === false);

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
  console.log('Это лог из action --- ', arrCurrent);
  return arrCurrent;
}

// можно использовать тернарник
// setFlags();

// const answer = arrFav.some(item => el.id === item.id);
// if (answer) {
//   el.favor = true;
// } else {
//   el.favor;
// }
// const reply = arrRead.some(i => el.id === i.id);
// if (reply) {
//   el.read = true;
// } else {
//   el.read;
// }
