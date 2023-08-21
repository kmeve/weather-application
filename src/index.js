let currentData = new Date();
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];
let day = days[currentData.getDay()];
let hours = currentData.getHours();
let minutes = currentData.getMinutes();
let h3 = document.querySelector("h3");
h3.innerHTML = `${day} ${hours}:${minutes}`;

function newTemperatureAm(event) {
  event.preventDefault();
  let newTemperatere = document.querySelector("#change-system");
  newTemperatere.innerHTML = 60;
}

let changeTemperature = document.querySelector(".choose-system-Am");
changeTemperature.addEventListener("click", newTemperatureAm);

function newTemperatureE(event) {
  event.preventDefault();
  let newTemperatere = document.querySelector("#change-system");
  newTemperatere.innerHTML = 21;
}

let temperatureE = document.querySelector(".choose-system-E");
temperatureE.addEventListener("click", newTemperatureE);

function newCityName(event) {
  event.preventDefault();
  let cityName = document.querySelector("#search-input");
  let h1 = document.querySelector("h1");
  h1.innerHTML = cityName.value;
  let city = cityName.value;
  let apiKey = "bd5b4461863eddaa6ced0a0a67989e0a";
  let units = "metric";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
  axios.get(apiUrl).then(showCity);
}

let submitCity = document.querySelector("#basic-addon2");
submitCity.addEventListener("click", newCityName);

function showCity(response) {
  let h1 = document.querySelector("h1");
  h1.innerHTML = response.data.name;
  let currentTemp = document.querySelector("#change-system");
  currentTemp.innerHTML = Math.round(response.data.main.temp);
  let currentHumidity = document.querySelector("#humidity");
  currentHumidity.innerHTML = `${response.data.main.humidity} %`;
  let currentWindSpeed = document.querySelector("#wind-speed");
  currentWindSpeed.innerHTML = Math.round(response.data.wind.speed);
  let description = document.querySelector("#describe");
  description.innerHTML = response.data.weather[0].description;
  let iconElement = document.querySelector("#icon");
  iconElement.setAttribute(
    "src",
    `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
  );
  iconElement.setAttribute("alt", response.data.weather[0].description);
}

function showPosition(position) {
  let latInfo = position.coords.latitude;
  let longInfo = position.coords.longitude;
  let apiKey = "bd5b4461863eddaa6ced0a0a67989e0a";
  let units = "metric";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latInfo}&lon=${longInfo}&appid=${apiKey}&units=${units}`;
  axios.get(apiUrl).then(showCity);
}

function getCurrentLocation(location) {
  navigator.geolocation.getCurrentPosition(showPosition);
}

let button = document.querySelector("#location");
button.addEventListener("click", getCurrentLocation);
