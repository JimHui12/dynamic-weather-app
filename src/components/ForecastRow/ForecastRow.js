import React from 'react';


export default function ForecastRow(props) {	
	return (
		<div className="weather-forecast__row">
			<span className="weather-forecast__day">{props.day}</span>
			<span className="weather-forecast__icon">
				<i className="fa fa-clock-o" />
				{props.time}
			</span>
			<span className="weather-forecast__high">{Math.round(props.high)} °{props.unit}</span>
			<span className="weather-forecast__low">{Math.round(props.low)} °{props.unit}</span>
		</div>
		
	);
	
}


