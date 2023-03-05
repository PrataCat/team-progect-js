function creatCardMarkup(el) {
  const { abstract, title, url, published_date, image_url, section, id, add } =
    el;

  return `<li class="box-news__item" data-id="${id}">
      <p class="box-news__section">${section}</p>
          <div class="box-news___wrap-reading">
            <span class="box-news__reading">Alredy read</span>
            <svg class="icon" width="18" height="18">
              <use href="#icon-check"></use>
            </svg> 
          </div>
          <button id="favorite-btn" class="box-news__favorite-btn" data-status='${add}'>
              <p id="favorite-p" class="box-news__favorite-p">Add to Favorite</p>
              <svg class="box-news__favorite-svg" width="16" height="16" id="favorite-svg">
                <use href="#icon-heart"></use>
              </svg>
            </button>
          <article>
            <div class="box-news__thumb">
              <img class="box-news__img" src="${image_url}" loading="lazy" alt="${section}" width='440'/>
            </div>
          <div class="box-news__wrap-title">
            <h2 class="box-news__titel">
              ${title}
            </h2>
          </div>
          <div class="box-news__wrap-text">
            <p class="box-news__text">
              ${
                abstract.length > 120
                  ? abstract.slice(0, 110) + '...'
                  : abstract
              }
            </p>
          </div>
          <div class="box-news__wrap">
            <p class="box-news__data">${published_date}</p>
            <a href="${url}" class="box-news__link" target="_blank" rel="noopener noreferrer nofollow">Read more</a>
          </div>
          </article>
          <div class="overlay"></div>
        </li>`;
}

export { creatCardMarkup };

// return `<li class="box-news__item" data-id="${elem.id}">
//       <p class="box-news__section">${elem.section}</p>
//           <div class="box-news___wrap-reading">
//             <span class="box-news__reading">Alredy read</span>
//             <svg class="icon" width="18" height="18">
//               <use href="#icon-check"></use>
//             </svg>
//           </div>
//           <button id="favorite-btn" class="box-news__favorite-btn favorite">
//               <p id="favorite-p" class="box-news__favorite-p">Add to Favorite</p>
//               <svg class="box-news__favorite-svg" width="16" height="16" id="favorite-svg">
//                 <use href="#icon-heart"></use>
//               </svg>
//             </button>
//           <article>
//             <div class="box-news__thumb">
//               <img class="box-news__img" src="${
//                 elem.image_url
//               }" loading="lazy" alt="${elem.section}" width='440'/>
//             </div>
//           <div class="box-news__wrap-title">
//             <h2 class="box-news__titel">
//               ${elem.title}
//             </h2>
//           </div>
//           <div class="box-news__wrap-text">
//             <p class="box-news__text">
//               ${
//                 elem.abstract.length > 120
//                   ? elem.abstract.slice(0, 110) + '...'
//                   : elem.abstract
//               }
//             </p>
//           </div>
//           <div class="box-news__wrap">
//             <p class="box-news__data">${elem.published_date}</p>
//             <a href="${
//               elem.url
//             }" class="box-news__link" target="_blank" rel="noopener noreferrer nofollow">Read more</a>
//           </div>
//           </article>
//           <div class="overlay"></div>
//         </li>`;
