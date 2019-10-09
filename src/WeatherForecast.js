import React from 'react';
//import cityWeather from './feakWeatherData.js';

export default class WeatherForecast extends React.Component {
    render() {
        return(
            <section className="weather-forecast">
                <div className="forecast__switch">
                    <button className="forecast__switch_0 switch-active">5 items</button>
                    <button className="forecast__switch_1">10 items</button>
                </div>

                <div className="weather-forecast__row">
                    <span className="weather-forecast__day">{this.props.cityWeather[0].day}</span>
                    <span className="weather-forecast__icon">
                        <i className="fa fa-clock-o"></i> {this.props.cityWeather[0].time[0].clock}
                    </span>
                    <span className="weather-forecast__high">{this.props.cityWeather[0].time[0].highest} c</span>
                    <span className="weather-forecast__low">{this.props.cityWeather[0].time[0].lowest} c</span>
                </div>
                <div className="weather-forecast__row">
                    <span className="weather-forecast__day">{this.props.cityWeather[0].day}</span>
                    <span className="weather-forecast__icon">
                        <i className="fa fa-clock-o"></i> {this.props.cityWeather[0].time[1].clock}
                    </span> 
                    <span className="weather-forecast__high">{this.props.cityWeather[0].time[1].highest} c</span>
                    <span className="weather-forecast__low">{this.props.cityWeather[0].time[1].lowest} c</span>                                       
                </div>
                <div className="weather-forecast__row">
                    <span className="weather-forecast__day">{this.props.cityWeather[0].day}</span>
                    <span className="weather-forecast__icon">
                        <i className="fa fa-clock-o"></i> {this.props.cityWeather[0].time[2].clock}
                    </span> 
                    <span className="weather-forecast__high">{this.props.cityWeather[0].time[2].highest} c</span>
                    <span className="weather-forecast__low">{this.props.cityWeather[0].time[2].lowest} c</span>                                         
                </div>
            </section>
        );
    }
}