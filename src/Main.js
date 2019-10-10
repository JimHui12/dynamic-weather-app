import React from 'react';
import WeatherCondition from './WeatherCondition';
import WeatherForecast from './WeatherForecast';

export default function Main (props) {
    return (
        <main>
            <WeatherCondition  />
            <WeatherForecast 
                forecasts = {props.forecasts} 
                changeLimit={props.changeLimit}
                limit={props.limit}
            />
        </main>
            
        
    );    
   
}