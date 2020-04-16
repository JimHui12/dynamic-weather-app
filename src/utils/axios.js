import axios from 'axios';

export const getWeatherFor = city => {
    return axios(`https://interactive-weather-app.herokuapp.com/api/weather/au/${city}?weatherType=`)
        .then(response => response.data.data);
        
};

//interactive-weather-app.herokuapp.com/api/weather?cc=au&city=${city}