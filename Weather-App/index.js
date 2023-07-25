const container = document.querySelector('.container')
const search = document.querySelector('.search-box button')
const weatherBox = document.querySelector('.weather-box')
const weatherDetails = document.querySelector('.weather-details')
const error404 = document.querySelector('.not-found')

search.addEventListener('click', () => {
    const APIKey = API_KEY;
    const city = document.querySelector('.search-box input').value;

    if(city === ''){
        return;
    }
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${APIKey}`)
        .then(response => response.json())
        .then(json => {
            console.log(json);
            if (json.cod === '404') {
                container.style.height = '400px';
                weatherBox.style.display = 'none';
                weatherDetails.style.display = 'none';
                error404.style.display = 'block';
                error404.classList.add('fadeIn');
                return;
            }

            error404.style.display = 'none';
            error404.classList.remove('fadeIn');

            const image = document.querySelector('.weather-box img');
            const temperature = document.querySelector('.weather-box .temperature');
            const description = document.querySelector('.weather-box .description');
            const humidity = document.querySelector('.weather-details .humidity span');
            const wind = document.querySelector('.weather-details .wind span');

            switch (json.weather[0].main) {
                case 'Thunderstorm':
                    image.src = 'iamges/filled/thunderstorms.svg'
                    break;
                case 'Drizzle':
                    image.src = 'images/filled/drizzle.svg';
                    break;
                case 'Rain':
                    image.src = 'images/filled/rain.svg';
                    break;
                case 'Snow':
                    image.src = 'images/filled/snow.svg';
                    break;
                case 'Haze':
                    if(json.dt > json.sys.sunset){
                        image.src = 'images/filled/haze-night.svg';
                    } else {
                        image.src = 'images/filled/haze-day.svg';
                    }
                    break;
                case 'Mist':
                    image.src = 'images/filled/mist.svg';
                    break;
                case 'Clear':
                    console.log(json.dt, json.sys.sunset);
                    if((json.dt > json.sys.sunset) && (json.dt > json.sys.sunrise) || ((json.dt < json.sys.sunset) && (json.dt < json.sys.sunrise))){
                        image.src = 'images/filled/clear-night.svg';
                        break;
                    } else{
                        image.src = 'images/filled/clear-day.svg';
                        break;
                    }
                case 'Clouds':
                    image.src = 'images/filled/cloudy.svg';
                    break;
                default:
                    image.src= '';
            }

            temperature.innerHTML = `${parseInt(json.main.temp)}<span>ºC</span>`;
            description.innerHTML = `${json.weather[0].description}`;
            humidity.innerHTML = `${json.main.humidity}%`;
            wind.innerHTML = `${parseFloat(json.wind.speed)}Km/h`;

            weatherBox.style.display = '';
            weatherDetails.style.display = '';
            weatherBox.classList.add('fadeIn');
            weatherDetails.classList.add('fadeIn');
            container.style.height = '590px';
        })
})