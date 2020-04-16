import React from 'react';


export default function ForecastRow(props) {	
	return (
		<div className="weather-forecast__row">
			<div className="weather-forecast__day">{props.day}</div>
			<div className="weather-forecast__day">{props.time}</div>
			<span className=" ">{props.weather} </span>
			<span className=" ">
			<img src={"http://openweathermap.org/img/wn/" + props.weatherIcon + ".png"} />
				 
			</span>
			<span className="weather-forecast__high">{Math.round(props.high)}°</span>
			<span className="weather-forecast__low">{Math.round(props.low)}°</span>
		</div>
		
	);
	
}


