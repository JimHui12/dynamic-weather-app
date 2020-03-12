import axios from 'axios';

export const getWeatherFor = city => {
    return axios(`interactive-weather-app.herokuapp.com/api/weather?cc=au&city=${city}`)
        .then(response => response.data.data);
        
};

