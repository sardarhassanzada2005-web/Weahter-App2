
const cityInput = document.querySelector('.city-input');
const searchBTN = document.querySelector('.search-btn');

// openweathermap.org  do sign and get api key
const apiKey = '';

searchBTN.addEventListener("click", ()=> {
    if(cityInput.value.trim() != ''){
        updateWeatherInfo(cityInput.value);
        cityInput.value = '';
        cityInput.blur();
    }
})

cityInput.addEventListener("keydown", (e)=> {
    if(e.key == 'Enter' && cityInput.value.trim() != ''){
        updateWeatherInfo(cityInput.value);
        cityInput.value = '';
        cityInput.blur();
    }
})

async function getFetchData(endPoint, city){
    const apiUrl = `https:api.openweathermap.org/data/2.5/${endPoint}?q=${city}&appid=${apiKey}&units=metric`
    const response = await fetch(apiUrl);
    return response.json();
}

async function updateWeatherInfo(city){
    const weatherData = await getFetchData(weather, city);
    console.log(weatherData);
}

