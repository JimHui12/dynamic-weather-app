import React from 'react';
import './App.css';
import Header from './Header';
import Nav from './Nav';
import Main from './Main';
import Footer from './Footer';
//import cityWeather from './feakWeatherData.js';

function App(props) {
  return (
    <div className="weather-channel__container">
      <Header />
      <Nav cityWeather = {props.cityWeather}/>
      <Main cityWeather = {props.cityWeather}/>
      <Footer />
    </div>
  );
}

export default App;
