const apiKey = "f872022958b0cb67d2485f4cf73e5fb2";

const cityInput = document.getElementById("city-input");
const searchButton = document.getElementById("search-button");
const temp = document.getElementById("temp");
const weather = document.getElementById("weather");
const humidity = document.getElementById("humidity");
const wind = document.getElementById("wind");

searchButton.addEventListener("click", searchWeather);

async function searchWeather() {
  const city = cityInput.value;
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=pt_br`;

  const response = await fetch(url);

  const data = await response.json();

  temp.textContent = `${Math.round(data.main.temp)}°C`;
  weather.textContent = data.weather[0].description;
  humidity.textContent = `${data.main.humidity}%`;
  wind.textContent = `${data.wind.speed} km/h`;
}
