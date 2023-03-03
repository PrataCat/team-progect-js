//------Tanya,
 //  ============== по умолчанию
fetchWeatherCity().then((data) =>{
  // console.log(data);
  createCard(data);
})

// ======== запрос разрешения геолокации
 navigator.geolocation.getCurrentPosition(position => {
  //  console.log(position.coords)
  if (position.coords = true) {
   const { latitude, longitude } = position.coords;
  let lat = `${latitude}`;
  let lon = `${longitude}`;
  fetchWeather(lat, lon).then((data) =>{
    box.firstChild.remove()
    // console.log(data);
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
   const box = document.querySelector('.box-news')

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
  //   console.log(arr.dt.toString());
  //  console.log(arr.id);
  //  console.log(Math.floor(arr.main.temp));
  //  console.log(arr.weather[0].main);
  //  console.log(arr.weather[0].icon);
   const temp = Math.floor(arr.main.temp);
  //  console.log(arr.name)
   const d1 = new Date();
  //  console.log(d1.toUTCString());
   const marcup =
          `<li class="box-weather__item box " data-id= "${arr.id}">
               <p class="weather-temp">${temp}&deg</p>
             <div class="weather-city-group"> 
               <p class="weather-main">${arr.weather[0].main}</p> 
               <button class="btn__select-city" type="submit">${arr.name}</button>
             </div>
        
             <img class="weather-icon" src=" http://openweathermap.org/img/wn/${arr.weather[0].icon}@2x.png" alt="${arr.title}">
               <p class= weather-day>${d1.toUTCString().slice(0, 3)}</p> 
               <p class= weather-data>${d1.toUTCString().slice(5,17)}</p> 
               <button class="weather-week" type="submit"> weather for week</button>
           </li>`
    box.insertAdjacentHTML("afterbegin" ,marcup);
  } 

  function onError(err) {
    console.error(err);
  }
  
export {createCard};






// Vika--------
