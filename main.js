const input = document.querySelector("input");
const searchBtn = document.querySelector("button");
const output = document.querySelector("output");

async function getWeather(location) {
  try {
    const city_res = await fetch(
      `https://api.weatherapi.com/v1/forecast.json?key=76ca8d66b5ae4c56991215645242603&q=${location}&days=3&aqi=no`
    );
    const city_data = await city_res.json();
    const forecastArray = city_data.forecast.forecastday;
    console.log(city_data);
    console.log(city_data.forecast.forecastday);
    output.innerHTML = `<div class="main">
        <p class="location location-main">${city_data.location.name}</p>
        <p class="location">${city_data.location.country}</p>
        <p class="location">${city_data.location.localtime}</p>
        <div class="current">
        <p id="current-f">${city_data.current.temp_f}°</p>
        <div>
        <img src="https:${city_data.current.condition.icon}" alt="weather icon" class="weather-icon" id="current-weather-icon" />
        </div>
        </div>
        <p class="current-condition">${city_data.current.condition.text}</p>
        <div class="low-high current-condition"><span>L: ${forecastArray[0].day.mintemp_f}°</span><span class="low-high">H: ${forecastArray[0].day.maxtemp_f}°</span></div>
        <br>

        <div class="forecast">
        <div class="daily-forecast">
        <p>Today</p>
        <img src="https:${forecastArray[0].day.condition.icon}" alt="weather icon" id="weather-icon" />
        <p class="condition">${forecastArray[0].day.condition.text}</p>
        <p class="low-f">Low: ${forecastArray[0].day.mintemp_f}°F</p>
        <p class="high-f">High: ${forecastArray[0].day.maxtemp_f}°F</p>
        </div>
        
        <div class="daily-forecast">
        <p>Tomorrow</p>
        <img src="https:${forecastArray[1].day.condition.icon}" alt="weather icon" id="weather-icon" />
        <p class="condition">${forecastArray[1].day.condition.text}</p>
        <p class="low-f">Low: ${forecastArray[1].day.mintemp_f}°F</p>
        <p class="high-f">High: ${forecastArray[1].day.maxtemp_f}°F</p>
        </div>

        <div class="daily-forecast">
        <p>Overmorrow</p>
        <img src="https:${forecastArray[2].day.condition.icon}" alt="weather icon" id="weather-icon" />
        <p class="condition">${forecastArray[2].day.condition.text}</p>
        <p class="low-f">Low: ${forecastArray[2].day.mintemp_f}°F</p>
        <p class="high-f">High: ${forecastArray[2].day.maxtemp_f}°F</p>
        </div>
        </div>
        </div>`;
    input.value = "";
  } catch (error) {
    // console.error("An error occurred:", error.message);
    alert("Please enter a valid city or zip code and try again.");
  }
}

getWeather("Sacramento");

searchBtn.addEventListener("click", async () => {
  getWeather(input.value);
});
