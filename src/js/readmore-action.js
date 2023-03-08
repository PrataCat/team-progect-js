import { writeReadStorage } from './read-library';
import { sendCurrentArray as getArray } from './news-list';

export function onClickReadMore(e) {
  if (e.target.tagName === 'A') {
    let currentId = e.target.closest('li').dataset.id;
    let currentLi = e.target.closest('li');

    for (const el of getArray()) {
      if (el.id === currentId) {
        writeReadStorage(el);
        currentLi.classList.add('show');
        return;
      }
    }
  }
}
