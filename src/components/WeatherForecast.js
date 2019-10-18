import React from 'react';
import { connect } from 'react-redux';
import ForecastRow from './ForecastRow.js';
import { changeLimitAction } from '../redux/weatherActions';

class WeatherForecast extends React.Component {
    render() {
        const { changeLimit, limit, unit } = this.props;
        const forecasts = this.props.forecasts.slice(0, limit);

        return (
            <section className="weather-forecast">
                <div className="forecast__switch">
                    <button 
                        className={`forecast__switch_0 ${limit === 5 ? 'switch-active' : ''}`}
                        onClick={() => changeLimit(5)}
                    >
                        5 items
                    </button>
                    <button 
                        className={`forecast__switch_1 ${limit === 10 ? 'switch-active' : ''}`}
                        onClick={() => changeLimit(10)}
                    >
                        10 items
                    </button>
                </div>
                {forecasts.map(forecast => {
					const date = new Date(forecast.time * 1000);
					const day = format(date, 'EEE');
					const time = format(date, 'HH:mm');

					return (
						<ForecastRow
							key={forecast.time}
							day={day}
							high={forecast.maxCelsius}
							low={forecast.minCelsius}
							time={time}
							unit={unit}
						/>
					);
				})}               
            </section>    
        );
    }
}

const mapStateToProps = state => ({
    limit: state.weather.limit,
});

const mapDispatchToProps = dispatch => ({
    changeLimit: (limit) => dispatch(changeLimitAction(limit)),
});

export default connect(mapStateToProps, mapDispatchToProps)(WeatherForecast);