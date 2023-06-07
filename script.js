const inputBox = document.querySelector(".input-box");
const searchBtn = document.getElementById("searchBtn");
const weather_img = document.querySelector(".weather-img");
const temprature = document.querySelector(".temprature");
const description = document.querySelector(".description");
const humidity = document.getElementById("humidity");
const wind_speed = document.getElementById("wind-speed");
const location_not_found = document.querySelector(".location-not-found");
const weather_body = document.querySelector(".weather-body");

async function checkWeather(city) {
  const api_key = "ee404f5234e6a5503ed4a68e83b774cd";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;

  const weather_data = await fetch(`${url}`).then((response) =>
    response.json()
  );

  if (weather_data.cod === "404") {
    location_not_found.style.display = "flex";
    weather_body.style.display = "none";
    return;
  }
  weather_body.style.display = "flex";
  location_not_found.style.display = "none";
  console.log(weather_data);

  humidity.innerHTML = `${weather_data.main.humidity}%`;

  temprature.innerHTML = `${Math.round(weather_data.main.temp - 273.15)}℃`;
  description.innerHTML = `${weather_data.weather[0].description}`;
  wind_speed.innerHTML = `${weather_data.wind.speed}Km/Hr`;

  switch (weather_data.weather[0].main) {
    case "Clouds":
      weather_img.src = "./images/clouds.png";
      break;
    case "Clear":
      weather_img.src = "./images/sun.png";
      break;
    case "Rain":
      weather_img.src = "./images/rain.png";
      break;
    case "Snow":
      weather_img.src = "./images/snow.png";
      break;
    case "Thunderstorm ":
      weather_img.src = "./images/thunder.png";
      break;

    case "Drizzle":
      weather_img.src = "./images/drizzle.png";
      break;

    case "Haze":
      weather_img.src = "./images/haze.png";
      break;
    case "Mist":
      weather_img.src = "./images/mist.png";
      break;
    case "Fog":
      weather_img.src = "./images/fog.png";
      break;
    case "Tornado":
      weather_img.src = "./images/tornado.png";
      break;
    case "Dust":
      weather_img.src = "./images/dust.png";
      break;
    case "Sand":
      weather_img.src = "./images/dust.png";
      break;
    case "Smoke":
      weather_img.src = "./images/smoke.png";
      break;
  }
}

searchBtn.addEventListener("click", () => {
  checkWeather(inputBox.value);
});
