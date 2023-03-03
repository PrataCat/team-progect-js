//------Tanya,
// ======== запрос разрешения геолокации
navigator.geolocation.getCurrentPosition(position => {
  // console.log(position.coords)
  if (position.coords = true) {
   const { latitude, longitude } = position.coords;
  let lat = `${latitude}`;
  let lon = `${longitude}`;
  fetchWeather(lat, lon).then((data) =>{
    console.log(data);
    createCard(data);
  });

 }else {
  fetchWeatherCity().then((data) =>{
    console.log(data);
    createCard(data);
  });
 }
});
 // ===========  по геолокации
 const KEY = 'а66723ff7785b663e20297f90d8a0e90'
 async function fetchWeather(lat, lon){ 
  const URL = `http://api.openweathermap.org/data/2.5/weather?APPID=a66723ff7785b663e20297f90d8a0e90&lat=${lat}&lon=${lon}&units=metric`
 const response = await fetch(URL);
   if (!response.ok) {
     throw new Error('Error');
   }
    const data = await response.json();
    return data;
   };
 //  ============== по умолчанию
async function fetchWeatherCity(q){ 
  const URL = `http://api.openweathermap.org/data/2.5/weather?APPID=a66723ff7785b663e20297f90d8a0e90&q=Kyiv&units=metric` 

  const response = await fetch(URL);
    if (!response.ok) {
     throw new Error('Error');
    }
     const data = await response.json();
     return data;
  };
  // ============== CARD
  function createCard(arr){
    console.log(arr.dt);
   console.log(arr.id);
   console.log(Math.floor(arr.main.temp));
   console.log(arr.weather[0].main);
   console.log(arr.weather[0].icon);
   const temp = Math.floor(arr.main.temp);
   console.log(arr.name)
   const d1 = new Date();
   console.log(d1.toUTCString());
   const marcup =
          `<li class= item data-id= "${arr.id}">
             <p class="weather-temp">${temp}&deg</p>
             <p class="weather-main">${arr.weather[0].main}</p> 
             <button class="btn__select-city" type="submit">${arr.name}</button>
             <img class="weather-icon" src=" http://openweathermap.org/img/wn/${arr.weather[0].icon}@2x.png" alt="${arr.title}">
             <p class= weather-data>${d1.toDateString()}</p> 
             <button type="submit"> Weather for Week</button>
          </li>`
   box.innerHTML = marcup;
  } 
  
  
  function onError(err) {
    console.error(err);
  }
  







// Vika--------
