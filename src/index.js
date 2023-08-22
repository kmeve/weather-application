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

function showCity(response) {
  let h1 = document.querySelector("h1");
  h1.innerHTML = response.data.name;
  let currentTemp = document.querySelector("#change-system");
  currentTemp.innerHTML = Math.round(response.data.main.temp);

  celTemperature = response.data.main.temp;

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

function displayFahrenheitTemperature(event) {
  event.preventDefault();
  let temperatureElement = document.querySelector("#change-system");

  let fahrenheitTemperature = (celTemperature * 9) / 5 + 32;
  temperatureElement.innerHTML = Math.round(fahrenheitTemperature);
  celsuisLink.classList.remove("active");
  fahrenheitLink.classList.add("active");
}

function displayCelsiusTemperature(event) {
  event.preventDefault();
  let temperatureElement = document.querySelector("#change-system");
  temperatureElement.innerHTML = Math.round(celTemperature);
  celsiusLink.classList.add("active");
  fahrenheitLink.classList.remove("active");
}

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

let submitCity = document.querySelector("#basic-addon2");
submitCity.addEventListener("click", newCityName);

let button = document.querySelector("#location");
button.addEventListener("click", getCurrentLocation);

let celTemperature = null;

let fahrenheitLink = document.querySelector("#fahrenheit");
fahrenheitLink.addEventListener("click", displayFahrenheitTemperature);

let celsuisLink = document.querySelector("#celsius");
celsiusLink.addEventListener("click", displayCelsiusTemperature);
