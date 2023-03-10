import debounce from 'lodash.debounce';
import sprite from '/src/images/weather-sprite.svg';

const WEATHER_API = `https://api.openweathermap.org/data/2.5/`;
const API_KEY = 'e2ab9bb084f395e2b419fd57d1bf78fc';

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

function createWeatherCardMarkup(arr) {
  const d1 = new Date();
  return `<div class="weather__wrap">
  <p class="weather-temp">${Math.floor(arr.main.temp)}&deg</p>
  <div class="weather-city-group">
    <p class="weather-main">${arr.weather[0].main}</p>
    <form class="search-form">
      <svg class="icon-carbon_location" width="18" height="18">
        <use href="${sprite}#icon-carbon_location"></use>
      </svg>
      <input type="text" id="search-box" placeholder="${arr.name}"/>
    </form>
  </div></div>
  <img class="weather-icon" src=" https://openweathermap.org/img/wn/${
    arr.weather[0].icon
  }@2x.png" alt="${arr.title}">
  <p class= weather-day>${d1.toUTCString().slice(0, 3)}</p>
  <p class= weather-data>${d1.toUTCString().slice(5, 17)}</p>
  <button type="button" class="forecast__btn">weather for 5 days</button>
  <div class="forecast">
    <button type="button" class="forecast-close__btn">
      <svg class="close__icon" width="22" height="22">
        <use href="${sprite}#icon-cross"></use>
      </svg>
    </button>
  <div class="forecast-wrapper">
    <div class="current-weather"></div>
    <ul class="forecast__list"></ul>
  </div>
  </div>`;
}

async function renderWeatherCard() {
  const weatherBox = document.querySelector('.box-weather__item');
  const defaultCity = await fetchWeatherCity('Kyiv');
  weatherBox.innerHTML = createWeatherCardMarkup(defaultCity);

  navigator.geolocation.getCurrentPosition(async position => {
    const data = await fetchWeather(
      position.coords.latitude,
      position.coords.longitude
    );
    const geoMarkup = createWeatherCardMarkup(data);
    weatherBox.innerHTML = geoMarkup;
    const openForecastBtn = document.querySelector('.forecast__btn');
    openForecastBtn.addEventListener('click', onOpenForecast);
  });
}

async function insertWeather() {
  const fetchWeather = await renderWeatherCard();
  const inputEl = document.querySelector('.box-weather__item');
  inputEl.addEventListener('input', debounce(onSubmitSearchCity, 1000));

  const openForecastBtn = document.querySelector('.forecast__btn');
  openForecastBtn.addEventListener('click', onOpenForecast);
}

async function onSubmitSearchCity(e) {
  if (!e.target.value.trim()) {
    return alert('Поле повинно бути заповнено.');
  }

  const weatherCity = await fetchWeatherCity(e.target.value);
  if (weatherCity.cod !== 200) {
    e.target.value = '';
    return;
  }

  const locationMarkup = createWeatherCardMarkup(weatherCity);
  const weatherBox = document.querySelector('.box-weather__item');
  weatherBox.innerHTML = locationMarkup;
}

// Vika-------------------------------------------------------------------------------------------------------

const URL_DEFAULT = `https://api.openweathermap.org/data/2.5/forecast?q=Kyiv&cnt=40&appid=ff3d132454e086af9e5461615c5adce7&units=metric`;

function onOpenForecast(evt) {
  const forecastDiv = evt.currentTarget;
  const forecastIsOpen = forecastDiv.querySelector('.forecast');
  evt.target.nextElementSibling.classList.add('is-open');
  const currentWeather = document.querySelector('.current-weather');
  const forecastList = document.querySelector('.forecast__list');
  const firstStepGetCloseBtn = evt.target.nextElementSibling;
  const closeForecastBtn = document.querySelector('.forecast-close__btn');

  closeForecastBtn.addEventListener('click', onCloseForecast);
  fetchWeatherCity('Kyiv').then(data => {
    createcurrentWeatherMarkup(data);
    currentWeather.innerHTML = createcurrentWeatherMarkup(data);
  });

  fetchForecast(URL_DEFAULT).then(data => {
    forecastList.insertAdjacentHTML('beforeend', createForecastMarkup(data));
  });

  navigator.geolocation.getCurrentPosition(position => {
    if (position.coords) {
      const { latitude, longitude } = position.coords;
      fetchWeather(latitude, longitude).then(data => {
        currentWeather.innerHTML = createcurrentWeatherMarkup(data);
      });

      fetchForecast(
        `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=ff3d132454e086af9e5461615c5adce7&units=metric`
      ).then(data => {
        createForecastMarkup(data);
        forecastList.innerHTML = '';
        forecastList.insertAdjacentHTML(
          'beforeend',
          createForecastMarkup(data)
        );
      });
    }
  });
}

function onCloseForecast(evt) {
  const forecastClose = evt.currentTarget;

  const forecastCloseDiv = forecastClose.parentNode;

  forecastCloseDiv.classList.remove('is-open');

  const forecastCloseNextElementSibling = forecastClose.nextElementSibling;

  const forecasWrapperFirstChild =
    forecastCloseNextElementSibling.firstElementChild;
  forecasWrapperFirstChild.innerHTML = '';

  const forecasWrapperLastChild =
    forecastCloseNextElementSibling.lastElementChild;
  forecasWrapperLastChild.innerHTML = '';

  forecastClose.removeEventListener('click', onCloseForecast);
}

async function fetchForecast(URL) {
  try {
    const response = await fetch(URL);
    if (!response.ok) {
      throw new Error('Error');
    }
    const data = await response.json();
    return data;
  } catch {
    error => console.log('ERROR' + error);
  }
}

function createcurrentWeatherMarkup(data) {
  const currentWeatherMarkup = `<p class="current-weather__location">
        <svg width="20" height="20">
          <use
            href="${sprite}#icon-location"
            class="location__icon">
          </use>
        </svg>
        ${data.name}, ${data.sys.country}
      </p>
      <img
        src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png"
        alt="${data.weather[0].main}"
        class="current-weather__img"
      />
      <p class="current-weather__temp">${Math.round(data.main.temp)}&deg</p>
      <div class="current-weather__wrapp">
        <p class="current-weather__status">${data.weather[0].main}</p>
        <p class="current-weather__feels">Feels like: ${Math.round(
          data.main.feels_like
        )}° C</p>
      </div>
      <p class="current-weather__humidity">
        Humidity: ${Math.round(data.main.humidity)} %
        <span>Wind: ${data.wind.speed} m/s</span>
        <span>Visibility: ${Math.round(data.visibility / 1000)} km</span>
      </p>`;
  return currentWeatherMarkup;
}

function createForecastMarkup(data) {
  const forecastMarkup = data.list
    .map(item => {
      const date = new Date(item.dt * 1000).toDateString();
      if (item.dt_txt.includes('12:00:00')) {
        return `<li class="forecast__item">
        <p class="forecast__date ">
          <span> ${date.slice(0, 4)}</span> <span> ${date.slice(4, 10)}</span>
        </p>
        <img
          src="https://openweathermap.org/img/wn/${item.weather[0].icon}.png"
          alt="${item.weather[0].main}"
          class="forecast__img"
        />
        <p class="forecast__pop">
          <svg width="22" height="22">
            <use
              href="${sprite}#icon-umbrella"
              class="forecast-umbrella__icon">
            </use>
          </svg> ${Math.round(item.pop * 100)} %
        </p>
        <p class="forecast__temp">${Math.round(item.main.temp)}&deg C</p>

      </li>`;
      }
    })
    .join('');
  return forecastMarkup;
}

export { insertWeather, renderWeatherCard };
