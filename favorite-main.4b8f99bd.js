function e(e){try{const s=t(),o=s.findIndex(((n,t)=>n.id===e));return s.splice(o,1),n(s),!0}catch(e){return console.error(e.message),!1}}function n(e){const n="Wrong data to save: array with objects is expected.";if("object"==typeof e)if(!1!==Array.isArray(e))try{const n=JSON.stringify(e);localStorage.setItem("Favorite",n)}catch(e){console.error("Set state error: ",e.message)}else console.log(n);else console.log(n)}function t(){try{const e=localStorage.getItem("Favorite");return null===e?void 0:JSON.parse(e)}catch(e){console.error(e.message)}}function s(){try{const e=localStorage.getItem("read");return null===e?{}:JSON.parse(e)}catch(e){console.log(e)}}function o(e){const{abstract:n,title:o,url:r,published_date:a,image_url:i,section:c,id:l}=e,d=function(e){let n=t()||[],o=s()||{},r=Object.values(o).flat();const a=n.find((n=>e.id===n.id)),i=r.find((n=>e.id===n.id));return rezult={fav:!!a,read:!!i}}(e);return`<li class="box-news__item ${d.read?"show":""}" data-id="${l}">\n      <p class="box-news__section">${c}</p>\n          <div class="box-news___wrap-reading">\n            <span class="box-news__reading">Alredy read</span>\n            <svg class="icon" width="18" height="18">\n              <use href="#icon-check"></use>\n            </svg> \n          </div>\n          <button class="box-news__favorite-btn ${d.fav?"favorite":""}">\n              <p class="box-news__favorite-p"> ${d.fav?"Remove from Favorite":"Add to Favorite"}</p>\n              <svg class="box-news__favorite-svg" width="16" height="16"">\n                <use href="#icon-heart"></use>\n              </svg>\n            </button>\n          <article>\n            <div class="box-news__thumb">\n              <img class="box-news__img" src="${i}" loading="lazy" alt="${c}" width='440'/>\n            </div>\n          <div class="box-news__wrap-title">\n            <h2 class="box-news__titel">\n              ${o}\n            </h2>\n          </div>\n          <div class="box-news__wrap-text">\n            <p class="box-news__text">\n              ${n.length>120?n.slice(0,110)+"...":n}\n            </p>\n          </div>\n          <div class="box-news__wrap">\n            <p class="box-news__data">${a}</p>\n            <a href="${r}" class="box-news__link" target="_blank" rel="noopener noreferrer nofollow">Read more</a>\n          </div>\n          </article>\n          <div class="overlay"></div>\n        </li>`}const r=document.querySelector(".box-news");function a(){const e=document.documentElement.clientWidth;return e>1280?8:e>768?7:4}function i(e){if("object"!=typeof e)return;if(!1===Array.isArray(e))return;perPage=a();const n=function(e,n,t){const s=(n-1)*t,o=s+t;return e.slice(s,o)}(t(),page=1,perPage),s=n.map((e=>o(e)));r.insertAdjacentHTML("beforeend",s.join(""))}r.addEventListener("click",(function(n){const s=n.target.classList.value;"box-news__btn"!==s&&"box-news__btn-icon"!==s||(currentId=+n.target.id,e(currentId),r.innerHTML="",i(t()))})),i(t());
//# sourceMappingURL=favorite-main.4b8f99bd.js.map
