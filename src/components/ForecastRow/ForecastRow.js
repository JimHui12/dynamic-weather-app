import React from 'react';


export default function ForecastRow(props) {	
	return (
		<div className="weather-forecast__row">
			<div className="weather-forecast__day">{props.day}</div>
			<div className="weather-forecast__time">{props.time}</div>
			<div className="weather-forecast__d_i_h_l">
				<div className="weather-forecast__desc">{props.weather} </div>
				<div className="weather-forecast__img">
					<img src={"http://openweathermap.org/img/wn/" + props.weatherIcon + ".png"} />	 
				</div>
				<div className="weather-forecast_h_l">
					<div className="weather-forecast__high">{Math.round(props.high)}°</div>
					<div className="weather-forecast__low">{Math.round(props.low)}°</div>		
				</div>
				
			</div>
		</div>
		
	);
	
}


