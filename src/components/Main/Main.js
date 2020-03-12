import React from 'react';
import WeatherCondition from '../WeatherCondition/WeatherCondition';
import WeatherForecast from '../WeatherForecast/WeatherForecast';

export default function Main (props) {
    return (
        <main className="container">
            <WeatherCondition  
                unit={props.unit}
                city = {props.city}
                condition = {props.condition}
                forecasts = {props.forecasts}
            />
            <WeatherForecast 
                unit={props.unit}
                forecasts = {props.forecasts} 
                changeLimit={props.changeLimit}    
            />
        </main>
                
    );       
}