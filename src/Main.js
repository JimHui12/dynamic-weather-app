import React from 'react';
import WeatherCondition from './WeatherCondition';
import WeatherForecast from './WeatherForecast';

export default function Main (props) {
    
        return (
            <main>
                <WeatherCondition cityWeather = {props.cityWeather}/>
                <WeatherForecast cityWeather = {props.cityWeather}/>
            </main>
                
            
        );    
   
}