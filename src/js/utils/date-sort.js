export function dateArraySort(dateArr) {
  const result = dateArr
    .map(item => {
      itemArr = item.split('/');
      return new Date(+itemArr[2], +itemArr[1] - 1, +itemArr[0]);
    })
    .sort((itemPrev, itemNext) => itemNext - itemPrev)
    .map(item => item.toLocaleString().slice(0, 10).split('.').join('/'));
}
