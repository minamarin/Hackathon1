const input = document.querySelector("input");
const searchBtn = document.querySelector("button");
const output = document.querySelector("output");
const backgroundElement = document.querySelector("body");

searchBtn.addEventListener("click", async () => {
  try {
    const city_res = await fetch(
      `https://api.weatherapi.com/v1/current.json?key=76ca8d66b5ae4c56991215645242603&q=${input.value}`
    );
    const city_data = await city_res.json();
    console.log(city_data);

    output.innerHTML = `<div class="main">
        <p class="city">${city_data.location.name}</p>
        <p class="country">${city_data.location.country}</p>
        <img src="https:${city_data.current.condition.icon}" alt="weather icon" id="weather-icon" />
        <p class="condition">${city_data.current.condition.text}</p>
        <p class="temp-f">${city_data.current.temp_f}°F</p>
        <p>Gust mph: ${city_data.current.gust_mph}</p>
        <p>UV: ${city_data.current.uv}</p>
        <p>Local Time: ${city_data.location.localtime}</p>
        </div>`;
  } catch (error) {
    console.error("An error occurred:", error.message);
  }
});
