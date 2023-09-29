
let locationInput = document.querySelector('.location-input');
let searchButton = document.querySelector('.search-button');
let dateTime = document.querySelector('.date-time');
let locationName = document.querySelector('.location-name');
let tempValue = document.querySelector('.temp-value');
let Humidity = document.querySelector('.humidity');
let Visibility = document.querySelector('.visibility');

let tempDescription = document.querySelector('.temp-description');

searchButton.addEventListener('click', () => {
    let location = locationInput.value;
    
    
    let apiKey = '8f7fe5343efe43c0ca5c0c14e0a2b595';
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}`;
     console.log(apiUrl)
    fetch(apiUrl)
        .then((response) => response.json())
    
        .then((data) => {
            dateTime.textContent=data.time
            locationName.textContent = data.name;
            tempValue.textContent = `${Math.round(data.main.temp - 273.15)}°C`;
            Humidity.textContent =` ${ data.main.humidity }% : humidity`
            Visibility.textContent=`${data.visibility}km : visibility`
            
            tempDescription.textContent = data.weather[0].description;
        })
        
        .catch((error) => console.error(error));
});
