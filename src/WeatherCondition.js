import React from 'react';
import umberella from './assets/icon-umberella.png';
import wind from './assets/icon-wind.png';
import compass from './assets/icon-compass.png';
//import cityWeather from './feakWeatherData.js';
import axios from 'axios';

class WeatherCondition extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
           
        };
    }


    render() {
        return(
            <section className="weather-condition">
                <div className="weather-condition__location">{this.props.forecast}</div>
                <div>{this.props.forecast}</div>
                <div className="weather-condition__temp">{this.props.forecast} c</div>
                <div className="weather-condition__desc">
                    <div>
                        <img src={umberella} alt="umberealla icon"/>
                        <span className="citem">{this.props.forecast} %</span>
                    </div>
                    <div>
                        <img src={wind} alt="wind icon"/><span className="citem">{this.props.forecast} km/h</span>    
                    </div>
                    <div>
                        <img src={compass} alt="compass icon" /><span className="citem">{this.props.forecast}</span>
                    </div>
                </div>
            </section>
        );
    }
}

export default WeatherCondition;