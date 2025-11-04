const appContainer = document.querySelector(".app-container");
const API_KEY = "4858a15fb45b40c2b08234623251410";
const BASE_URL = "http://api.weatherapi.com/v1";
const API_METHODS = {
    current: "/current.json",
    forecast: "/forecast.json",
    search: "/search.json"
}

fetch(`${BASE_URL}${API_METHODS.current}?key=${API_KEY}&q=auto:ip`)
.then(rawData => rawData.json())
.then(data => {
    appContainer.innerHTML = `
        <div class="current-weather">
            <div>
                <h1>Current Weather</h1>
                <p>${data.location.localtime}</p>
            </div>
            <div>
                <span>
                    <h1>${data.current.temp_c}&deg;C</h1>
                    <img src="${data.current.condition.icon}">
                </span>
                <h2>${data.current.condition.text}</h2>
            </div>
        </div>
    `
})

