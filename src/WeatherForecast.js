import React from 'react';
import ForecastRow from './ForecastRow.js';

export default class WeatherForecast extends React.Component {
    

    render() {
        const {limit, unit} = this.props;
        return (
            <section className="weather-forecast">
                <div className="forecast__switch">
                    <button 
                        className={`forecast__switch_0 ${limit === 5 ? 'switch-active' : ''}`}
                        onClick={() => this.props.changeLimit(5)}
                    >
                        5 items
                    </button>
                    <button 
                        className={`forecast__switch_1 ${limit === 10 ? 'switch-active' : ''}`}
                        onClick={() => this.props.changeLimit(10)}
                    >
                        10 items
                    </button>
                </div>
                {this.props.forecasts.map(forecast => 
                    <ForecastRow 
                        unit={unit}
                        key={forecast.day + forecast.time}
                        day={forecast.day}
                        high={unit === 'c' ? forecast.highCelsius: forecast.highFahrenheit}
                        low={unit === 'c' ? forecast.lowCelsius : forecast.lowFahrenheit}
                        time={forecast.time}
                    />, 
                    
                )}

                
            </section>

            
        );
    }


}