import React from 'react';
// import axios from 'axios';
// import { format} from 'date-fns';

import ForecastRow from './ForecastRow.js';

export default class WeatherForecast extends React.Component {
    render() {
        return (
            <section className="weather-forecast">
                <div className="forecast__switch">
                    <button 
                        className={`forecast__switch_0 ${this.props.limit === 5 ? 'switch-active' : ''}`}
                        onClick={() => this.props.changeLimit(5)}
                    >
                        5 items
                    </button>
                    <button 
                        className={`forecast__switch_1 ${this.props.limit === 10 ? 'switch-active' : ''}`}
                        onClick={() => this.props.changeLimit(10)}
                    >
                        10 items
                    </button>
                </div>
                {this.props.forecasts.map(forecast => 
                    <ForecastRow 
                        key={forecast.day + forecast.time}
                        day={forecast.day}
                        high={forecast.high}
                        low={forecast.low}
                        time={forecast.time}
                    />, 
                    
                )}

                
            </section>

            
        );
    }


}