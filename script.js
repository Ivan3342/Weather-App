const searchButton = document.querySelector(".search-button");
const appContainer = document.querySelector(".app-container");
const API_KEY = "4858a15fb45b40c2b08234623251410";
const BASE_URL = "http://api.weatherapi.com/v1";
const API_METHODS = {
    current: "/current.json",
    forecast: "/forecast.json",
    search: "/search.json"
}

const fetchCurrent = (city) => {
    if(city == null) {
        city = "auto:ip"
    }
    fetch(`${BASE_URL}${API_METHODS.current}?key=${API_KEY}&q=${city}`)
    .then(rawData => {
        console.log(rawData);
        return rawData.json();
    })
    .then(data => {
        appContainer.innerHTML = `
            <div class="current-weather">

                <div class="current-weather-header">
                    <h1>Current Weather: ${data.location.name}, ${data.location.country}</h1>
                    <h1>${data.location.localtime.split(" ")[1]}</h1>
                </div>

                <div class="current-weather-body">

                    <div class="current-weather-temps">
                        <img src="${data.current.condition.icon}">
                        <h1>${data.current.temp_c}&deg;C</h1>
                        <h2 class="feels-like">Feels like ${data.current.feelslike_c}&deg;C</h2>
                    </div>
                    <h1 class="current-weather-condition">${data.current.condition.text}</h1>
                </div>
            </div>

            <div></div>
        `;
    })
}

const fetchForecast = () => {
    //to finish
}

document.addEventListener("DOMContentLoaded", () => {
    fetchCurrent();
})

searchButton.addEventListener("click", () => {
    const city = document.querySelector(".search-bar").value;
    fetchCurrent(city);
})
