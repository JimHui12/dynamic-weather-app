import React from 'react';
import {connect} from 'react-redux';
import umberella from '../../assets/icon-umberella.png';
import wind from '../../assets/icon-wind.png';
import compass from '../../assets/icon-compass.png';



export default function WeatherCondition(props) {
    const {
        city: {
            name
        },
        condition: {
            maxCelsius,
            maxFahrenheit,
            humidity,
            windSpeed,
            windDirection,
            weatherDesc,
            weather,
            weatherIcon,
        },
        unit
    } = props;
    return(
        <section className="weather-information weather-condition">
            <div className="weather-condition__location"> {name}</div>
            
            <div className="weather-condition__temp"> {unit === 'c' ? Math.round(maxCelsius) : Math.round(maxFahrenheit)} °{unit}</div>
            <div className="weather-condition__desc">
                <div>
                     
                    <span className="description"> {weatherDesc}</span>
                </div>
                <div>
                    <img src={umberella} alt="umberealla icon"/>
                    <span className="citem"> {humidity} %</span>
                </div>
                <div>
                    <img src={wind} alt="wind icon"/>
                    <span className="citem"> {windSpeed} km/h</span>    
                </div>
                <div>
                    <img src={compass} alt="compass icon" />
                    <span className="citem"> {windDirection}</span>
                </div>
            </div>
        </section>
    );

}

const mapStateProps = state => ({
    city: state.weather.city.name,
    

})

connect()(WeatherCondition);