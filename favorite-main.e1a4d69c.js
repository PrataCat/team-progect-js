!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},r={},n=e.parcelRequire6b37;null==n&&((n=function(e){if(e in t)return t[e].exports;if(e in r){var n=r[e];delete r[e];var a={id:e,exports:{}};return t[e]=a,n.call(a.exports,a,a.exports),a.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){r[e]=t},e.parcelRequire6b37=n),n("i8Q71");var a=n("cHsZg"),i=n("iF1nq"),o=n("aGx0e"),l=document.querySelector(".box-news"),s=document.querySelector(".footer"),d=document.querySelector(".header");function c(){var e=document.documentElement.clientWidth;return e>1280?8:e>768?7:4}function u(e){var t;if(t='<div class="no-results-wrap"><p class="no-results-text">'.concat("The favorite news list is empty",'</p><span class="no-results-bgr"></span></div>'),l.innerHTML=t,"object"==typeof e&&!1!==Array.isArray(e)){var r=c(),n=function(e,t,r){var n=(t-1)*r,a=n+r;return e.slice(n,a)}((0,a.loadAllFavorites)(),1,r);if(0===n.length)s.classList.add("footer-margin"),d.classList.add("header-margin");else{var o=n.map((function(e){return(0,i.creatCardMarkup)(e)}));l.innerHTML=o.join("")}}}l.addEventListener("click",(function(e){if(e.target.closest(".box-news__favorite-btn")){var t=e.target.closest("li").dataset.id;(0,a.excludeFavoriteNew)(t),l.innerHTML="",u((0,a.loadAllFavorites)())}return})),l.addEventListener("click",(function(e){if("A"===e.target.tagName){var t=e.target.closest("li").dataset.id,r=e.target.closest("li"),n=(0,a.loadAllFavorites)(),i=!0,l=!1,s=void 0;try{for(var d,c=n[Symbol.iterator]();!(i=(d=c.next()).done);i=!0){var u=d.value;if(u.id===t)return(0,o.writeReadStorage)(u),void r.classList.add("show")}}catch(e){l=!0,s=e}finally{try{i||null==c.return||c.return()}finally{if(l)throw s}}}})),u((0,a.loadAllFavorites)())}();
//# sourceMappingURL=favorite-main.e1a4d69c.js.map
