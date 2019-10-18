import React from 'react';
import WeatherCondition from './WeatherCondition';
import WeatherForecast from './WeatherForecast';

export default function Main (props) {
    return (
        <main>
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