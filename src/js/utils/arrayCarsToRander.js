export function displayItems(arr, page, perPage) {
  const start = (page - 1) * perPage;
  const end = start + perPage;
  const paginatedEl = arr.slice(start, end);
  return paginatedEl;
}
// ф-ция возвращает массив карточек для рендера на 
// текущую страницу(из текущуго массива arrCurrentNews)
