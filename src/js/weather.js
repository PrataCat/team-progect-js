//------Tanya,

import debounce from 'lodash.debounce';

const WEATHER_API = `https://api.openweathermap.org/data/2.5/`;
const API_KEY = 'e2ab9bb084f395e2b419fd57d1bf78fc';

renderWeatherCard();

// ===========  по геолокации

async function fetchWeather(lat, lon) {
  const URL = `${WEATHER_API}weather?appid=${API_KEY}&lat=${lat}&lon=${lon}&units=metric`;
  const response = await fetch(URL);
  if (!response.ok) {
    throw new Error('Error');
  }
  const data = await response.json();
  return data;
}

//  ============== по городу

async function fetchWeatherCity(q) {
  const URL = `${WEATHER_API}weather?appid=${API_KEY}&q=${q}&units=metric`;
  try {
    const res = await fetch(URL);

    const data = await res.json();

    return data;
  } catch (error) {
    console.log(error);
  }
}

// ============== CARD

function createWeatherCardMarcup(arr) {
  const d1 = new Date();
  return `
  <p class="weather-temp">${Math.floor(arr.main.temp)}&deg</p>
  <div class="weather-city-group">
    <p class="weather-main">${arr.weather[0].main}</p>
    <form class="search-form">
      <svg class="icon icon-carbon_location-filled" width="14" height="14">
        <use href="./header-sprite.svg#icon-carbon_location-filled" width="14" height="14""></use></svg>
      <input type="text" id="search-box" placeholder="   ${arr.name}"/>
    </form>
  </div>
  <img class="weather-icon" src=" http://openweathermap.org/img/wn/${
    arr.weather[0].icon
  }@2x.png" alt="${arr.title}">
  <p class= weather-day>${d1.toUTCString().slice(0, 3)}</p>
  <p class= weather-data>${d1.toUTCString().slice(5, 17)}</p>
  <button class="weather-week" type="submit"> weather for week</button>`;
}

async function renderWeatherCard() {
  const weatherBox = document.querySelector('.box-weather__item');
  const defaultCity = await fetchWeatherCity('Kyiv');
  weatherBox.innerHTML = createWeatherCardMarcup(defaultCity);

  navigator.geolocation.getCurrentPosition(async position => {
    // console.log('im here');
    const data = await fetchWeather(
      position.coords.latitude,
      position.coords.longitude
    );
    // console.log(data);
    const geoMarkup = createWeatherCardMarcup(data);
    weatherBox.innerHTML = geoMarkup;
  });
}

// const inputEl = document.getElementById('search-box');
// inputEl.addEventListener('input', debounce(onSubmitSearchCity, 1000));

async function onSubmitSearchCity(e) {
  if (!e.target.value.trim()) {
    return alert('Поле повинно бути заповнено.');
  }

  const valueCity = e.target.value;

  const weatherCity = await fetchWeatherCity(valueCity);
  if (weatherCity.cod !== 200) {
    e.target.value = '';
    return;
  }

  const markup = createWeatherCardMarcup(weatherCity);
  const weatherBox = document.querySelector('.box-weather__item');
  weatherBox.innerHTML = markup;
}

export { renderWeatherCard };

// Vika--------

// //  ============== по умолчанию
// fetchWeatherCity().then(data => {
//   // console.log(data);
//   createCard(data);
// });

// // ======== запрос разрешения геолокации
// navigator.geolocation.getCurrentPosition(position => {
//   //  console.log(position.coords)
//   if ((position.coords = true)) {
//     const { latitude, longitude } = position.coords;
//     let lat = `${latitude}`;
//     let lon = `${longitude}`;
//     fetchWeather(lat, lon).then(data => {
//       box.firstChild.remove();
//       // console.log(data);
//       createCard(data);
//     });
//   }
// });
// // ===========  по геолокации
// const KEY = 'а66723ff7785b663e20297f90d8a0e90';
// async function fetchWeather(lat, lon) {
//   const URL = `https://api.openweathermap.org/data/2.5/weather?APPID=a66723ff7785b663e20297f90d8a0e90&lat=${lat}&lon=${lon}&units=metric`;
//   const response = await fetch(URL);
//   if (!response.ok) {
//     throw new Error('Error');
//   }
//   const data = await response.json();
//   return data;
// }
// const box = document.querySelector('.box-news');

// //  ============== по умолчанию
// async function fetchWeatherCity(q) {
//   const URL = `https://api.openweathermap.org/data/2.5/weather?APPID=a66723ff7785b663e20297f90d8a0e90&q=Kyiv&units=metric`;
//   const response = await fetch(URL);
//   if (!response.ok) {
//     throw new Error('Error');
//   }
//   const data = await response.json();
//   return data;
// }
// // ============== CARD
// function createCard(arr) {
//   //   console.log(arr.dt.toString());
//   //  console.log(arr.id);
//   //  console.log(Math.floor(arr.main.temp));
//   //  console.log(arr.weather[0].main);
//   //  console.log(arr.weather[0].icon);
//   const temp = Math.floor(arr.main.temp);
//   //  console.log(arr.name)
//   const d1 = new Date();
//   //  console.log(d1.toUTCString());
//   const marcup = `<li class="box-weather__item box " data-id= "${arr.id}">
//                <p class="weather-temp">${temp}&deg</p>
//              <div class="weather-city-group">
//                <p class="weather-main">${arr.weather[0].main}</p>
//                <form class="search-form">
//                <svg class="icon icon-carbon_location-filled" width="14" height="14">
//                <use href="./header-sprite.svg#icon-carbon_location-filled" width="14" height="14""></use></svg>
//                <input type="text" id="search-box" placeholder="            ${
//                  arr.name
//                }"/>
//             </form>
//              </div>

//              <img class="weather-icon" src=" http://openweathermap.org/img/wn/${
//                arr.weather[0].icon
//              }@2x.png" alt="${arr.title}">
//                <p class= weather-day>${d1.toUTCString().slice(0, 3)}</p>
//                <p class= weather-data>${d1.toUTCString().slice(5, 17)}</p>
//                <button class="weather-week" type="submit"> weather for week</button>
//            </li>`;
//   box.insertAdjacentHTML('afterbegin', marcup);
//   // =========== доступ к кнопкам, вешаем слушателей==========
//   // ======город
//   const inputEl = document.getElementById('search-box');
//   // console.log(inputEl);
//   inputEl.addEventListener('input', onSubmitSearchCity);
//   // ======погода на 5 дней
// }
// function onSubmitSearchCity(e) {
//   e.preventDefault();
//   // console.log('sos')
//   const valueCity = e.currentTarget.value;
//   // console.log(valueCity)
//   if (e.value === '') {
//     const message = 'Поле повинно бути заповнено.';
//     return alert(message);
//   } else {
//     valueCity.length === 0;
//     console.info('no sity');
//   }
//   // console.log('City:', valueCity);
//   const URL = `http://api.openweathermap.org/data/2.5/weather?APPID=a66723ff7785b663e20297f90d8a0e90&q=${valueCity}&units=metric`;
//   //  const URL = `http://api.openweathermap.org/data/2.5/weather?APPID=a66723ff7785b663e20297f90d8a0e90&units=metric&id=700022`
//   fetch(URL)
//     .then(res => {
//       //  console.log(res)
//       if (!res.ok) {
//         throw new Error('Error');
//       }
//       return res.json();
//     })
//     .then(data => {
//       box.firstChild.remove();
//       // console.log(data);
//       createCard(data);
//     });
// }

// function onError(error) {
//   console.error(error);
// }

// export { createCard };
