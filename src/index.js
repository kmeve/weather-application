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
}

let submitCity = document.querySelector("#basic-addon2");
submitCity.addEventListener("click", newCityName);
