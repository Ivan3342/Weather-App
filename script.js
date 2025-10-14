const API_KEY = "4858a15fb45b40c2b08234623251410";
const BASE_URL = "http://api.weatherapi.com/v1";
const API_METHODS = {
    current: "/current.json",
    forecast: "/forecast.json",
    search: "/search.json"
}

console.log(`${BASE_URL}${API_METHODS.current}?key=${API_KEY}`);

fetch(`${BASE_URL}${API_METHODS.current}?key=${API_KEY}&q=auto:ip`).then(

);
