!function(){function e(e,t,n,r){Object.defineProperty(e,t,{get:n,set:r,enumerable:!0,configurable:!0})}function t(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},o={},i=n.parcelRequire6b37;null==i&&((i=function(e){if(e in r)return r[e].exports;if(e in o){var t=o[e];delete o[e];var n={id:e,exports:{}};return r[e]=n,t.call(n.exports,n,n.exports),n.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){o[e]=t},n.parcelRequire6b37=i),i.register("iE7OH",(function(t,n){var r,o;e(t.exports,"register",(function(){return r}),(function(e){return r=e})),e(t.exports,"resolve",(function(){return o}),(function(e){return o=e}));var i={};r=function(e){for(var t=Object.keys(e),n=0;n<t.length;n++)i[t[n]]=e[t[n]]},o=function(e){var t=i[e];if(null==t)throw new Error("Could not resolve bundle with id "+e);return t}})),i.register("i8Q71",(function(n,r){e(n.exports,"getSearchForm",(function(){return l}));var o=i("l1Gdk"),a=i("aiCRC"),s=window.innerWidth;function c(){return document.location.pathname}function l(){return document.getElementById("search-form")}function u(){return document.querySelector(window.innerWidth<768?".mobile-menu":".header .container")}function d(){f()||(u().insertAdjacentHTML("beforeend",'\n<div class="theme-toggler" id="theme-toggler">\n  <div class="theme-toggler__preinfo">\n    <svg class="theme-toggler__icon" width="20px" height="20px">\n      <use href="'.concat(t(a),'#icon-light-theme"></use>\n    </svg>\n    <span class="theme-toggler__text">Light</span>\n  </div>\n\n  <div class="theme-toggler__toggle-icon"></div>\n\n  <div class="theme-toggler__postinfo">\n    <svg class="theme-toggler__icon" width="20px" height="20px">\n      <use href="').concat(t(a),'#icon-dark-theme"></use>\n    </svg>\n    <span class="theme-toggler__text">Dark</span>\n  </div>\n</div>')),f().addEventListener("click",g))}function f(){return document.getElementById("theme-toggler")}function g(e){var t;e.target.classList.contains("theme-toggler__toggle-icon")&&(f().classList.toggle("isActive"),document.body.classList.toggle("dark-theme"),t=f().classList.contains("isActive")?"dark":"light",localStorage.setItem("theme",t))}function v(){"light"!==(localStorage.getItem("theme")||"light")&&(f().classList.add("isActive"),document.body.classList.add("dark-theme"))}document.querySelector('.nav__link[href*="'.concat(document.location.pathname,'"]')).classList.add("nav__link--current"),function(){if(c().includes("favorite-main.html")||c().includes("read-main.html"))return;document.querySelector(".header .container").insertAdjacentHTML("beforeEnd",'\n    <form class="search-form closed" id="search-form">\n      <input type="text" class="search-form__input" placeholder="Search  |">\n      <button type="submit" class="search-form__btn">\n        <svg class="search-form__icon" width="20px" height="20px">\n          <use href="'.concat(t(a),'#icon-search"></use>\n        </svg>\n      </button>\n    </form>\n  '))}(),document.querySelector(".header .container").insertAdjacentHTML("beforeEnd",'<button class="menu-btn">\n      <span class="menu-btn__line menu-btn__line--1"></span>\n      <span class="menu-btn__line menu-btn__line--2"></span>\n      <span class="menu-btn__line menu-btn__line--3"></span>\n    </button>'),d(),v(),document.querySelector(".menu-btn").addEventListener("click",(function(e){e.currentTarget.classList.toggle("isOpen"),document.querySelector(".mobile-menu").classList.toggle("isOpen"),l().classList.toggle("isHidden"),document.body.classList.toggle("js-scrollBlock")})),window.addEventListener("resize",t(o)((function(){var e,t;e=window.innerWidth,t=s<768&&e>=768||s>=768&&s<1280&&(e<768||e>=1280)||s>=1280&&e<1280,s=e,t&&!f().parentElement!==u()&&(f().removeEventListener("click",g),f().remove(),d(),v())}),100))})),i.register("l1Gdk",(function(e,r){var o=i("l5bVx"),a=/^\s+|\s+$/g,s=/^[-+]0x[0-9a-f]+$/i,c=/^0b[01]+$/i,l=/^0o[0-7]+$/i,u=parseInt,d="object"==typeof n&&n&&n.Object===Object&&n,f="object"==typeof self&&self&&self.Object===Object&&self,g=d||f||Function("return this")(),v=Object.prototype.toString,m=Math.max,p=Math.min,h=function(){return g.Date.now()};function _(e){var n=void 0===e?"undefined":t(o)(e);return!!e&&("object"==n||"function"==n)}function b(e){if("number"==typeof e)return e;if(function(e){return"symbol"==(void 0===e?"undefined":t(o)(e))||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==v.call(e)}(e))return NaN;if(_(e)){var n="function"==typeof e.valueOf?e.valueOf():e;e=_(n)?n+"":n}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(a,"");var r=c.test(e);return r||l.test(e)?u(e.slice(2),r?2:8):s.test(e)?NaN:+e}e.exports=function(e,t,n){var r,o,i,a,s,c,l=0,u=!1,d=!1,f=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function g(t){var n=r,i=o;return r=o=void 0,l=t,a=e.apply(i,n)}function v(e){return l=e,s=setTimeout(x,t),u?g(e):a}function y(e){var n=e-c;return void 0===c||n>=t||n<0||d&&e-l>=i}function x(){var e=h();if(y(e))return w(e);s=setTimeout(x,function(e){var n=t-(e-c);return d?p(n,i-(e-l)):n}(e))}function w(e){return s=void 0,f&&r?g(e):(r=o=void 0,a)}function S(){var e=h(),n=y(e);if(r=arguments,o=this,c=e,n){if(void 0===s)return v(c);if(d)return s=setTimeout(x,t),g(c)}return void 0===s&&(s=setTimeout(x,t)),a}return t=b(t)||0,_(n)&&(u=!!n.leading,i=(d="maxWait"in n)?m(b(n.maxWait)||0,t):i,f="trailing"in n?!!n.trailing:f),S.cancel=function(){void 0!==s&&clearTimeout(s),l=0,r=c=o=s=void 0},S.flush=function(){return void 0===s?a:w(h())},S}})),i.register("l5bVx",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e}})),i.register("aiCRC",(function(e,t){e.exports=i("aNJCr").getBundleURL("j5YdF")+i("iE7OH").resolve("gUlc6")})),i.register("aNJCr",(function(t,n){var r;e(t.exports,"getBundleURL",(function(){return r}),(function(e){return r=e}));var o={};function i(e){return(""+e).replace(/^((?:https?|file|ftp|(chrome|moz)-extension):\/\/.+)\/[^/]+$/,"$1")+"/"}r=function(e){var t=o[e];return t||(t=function(){try{throw new Error}catch(t){var e=(""+t.stack).match(/(https?|file|ftp|(chrome|moz)-extension):\/\/[^)\n]+/g);if(e)return i(e[2])}return"/"}(),o[e]=t),t}})),i.register("aGx0e",(function(t,n){function r(){try{var e=localStorage.getItem("read");return null===e?{}:JSON.parse(e)}catch(e){console.log(e)}}function o(e){!function(e){var t=r(),n=!0,o=!1,i=void 0;try{for(var a,s=Object.keys(t)[Symbol.iterator]();!(n=(a=s.next()).done);n=!0){key=a.value;var c=t[key].findIndex((function(t){return t.id===e.id}));c>-1&&(console.log(t[key]),t[key].splice(c,1))}}catch(e){o=!0,i=e}finally{try{n||null==s.return||s.return()}finally{if(o)throw i}}localStorage.setItem("read",JSON.stringify(t))}(e);var t=r(),n=(new Date).toLocaleString().slice(0,10).split(".").join("/");t[n]||(t[n]=[]),t[n].push(e),localStorage.setItem("read",JSON.stringify(t))}e(t.exports,"loadReadStorage",(function(){return r})),e(t.exports,"writeReadStorage",(function(){return o}))})),i.register("iF1nq",(function(t,n){e(t.exports,"creatCardMarkup",(function(){return a}));var r=i("cHsZg"),o=i("aGx0e");function a(e){var t,n,i,a,s,c,l=e.abstract,u=e.title,d=e.url,f=e.published_date,g=e.image_url,v=e.section,m=e.id,p=(t=e,n=(0,r.loadAllFavorites)()||[],i=(0,o.loadReadStorage)()||{},a=Object.values(i).flat(),s=n.find((function(e){return t.id===e.id})),c=a.find((function(e){return t.id===e.id})),{fav:!!s,read:!!c});return'<li class="box-news__item '.concat(p.read?"show":"",'" data-id="').concat(m,'">\n      <p class="box-news__section">').concat(v,'</p>\n          <div class="box-news___wrap-reading">\n            <span class="box-news__reading">Alredy read</span>\n            <svg class="icon" width="18" height="18">\n              <use href="#icon-check"></use>\n            </svg> \n          </div>\n          <button class="box-news__favorite-btn ').concat(p.fav?"favorite":"",'">\n              <p class="box-news__favorite-p"> ').concat(p.fav?"Remove from Favorite":"Add to Favorite",'</p>\n              <svg class="box-news__favorite-svg" width="16" height="16"">\n                <use href="#icon-heart"></use>\n              </svg>\n            </button>\n          <article>\n            <div class="box-news__thumb">\n              <img class="box-news__img" src="').concat(g,'" loading="lazy" alt="').concat(v,'" width=\'440\'/>\n            </div>\n          <div class="box-news__wrap-title">\n            <h2 class="box-news__titel">\n              ').concat(u,'\n            </h2>\n          </div>\n          <div class="box-news__wrap-text">\n            <p class="box-news__text">\n              ').concat(l.length>120?l.slice(0,110)+"...":l,'\n            </p>\n          </div>\n          <div class="box-news__wrap">\n            <p class="box-news__data">').concat(f,'</p>\n            <a href="').concat(d,'" class="box-news__link" target="_blank" rel="noopener noreferrer nofollow">Read more</a>\n          </div>\n          </article>\n          <div class="overlay"></div>\n        </li>')}})),i.register("cHsZg",(function(t,n){e(t.exports,"includeFavoriteNew",(function(){return o})),e(t.exports,"loadAllFavorites",(function(){return s})),e(t.exports,"excludeFavoriteNew",(function(){return i}));var r="Favorite";function o(e){try{var t=s();return"object"==typeof t&&!1!==Array.isArray(t)||(t=[],console.log(t)),t.unshift(e),a(t),!0}catch(e){return console.error(e.message),!1}}function i(e){try{var t=s(),n=t.findIndex((function(t,n){return t.id===e}));return t.splice(n,1),a(t),!0}catch(e){return console.error(e.message),!1}}function a(e){var t="Wrong data to save: array with objects is expected.";if("object"==typeof e)if(!1!==Array.isArray(e))try{var n=JSON.stringify(e);localStorage.setItem(r,n)}catch(e){console.error("Set state error: ",e.message)}else console.log(t);else console.log(t)}function s(){try{var e=localStorage.getItem(r);return null===e?void 0:JSON.parse(e)}catch(e){console.error(e.message)}}})),i("iE7OH").register(JSON.parse('{"j5YdF":"read-main.4e88a80d.js","gUlc6":"header-sprite.24231d43.svg"}'))}();
//# sourceMappingURL=read-main.4e88a80d.js.map
