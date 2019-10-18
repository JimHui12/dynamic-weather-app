import React from 'react';
import {connect } from 'react-redux';
import './App.css';
import {getWeatherFor} from './utils/axios.js';
import { format} from 'date-fns';

import Header from './components/Header';
import Nav from './components/Nav';
import Main from './components/Main';
import Footer from './components/Footer';

import {fetchDataThunkAction} from './redux/weatherActions';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      unit: 'c',
      forecasts:[],
      condition: {},
      city: [],
      limit: 5,
      input: '',
    };
  }

  componentDidMount() {
    //fetch data
    getWeatherFor('brisbane')
      .then(this.updateWeather);
  }

  changeLimit = limit => {
    this.setState({limit});
  }

  toggleUnit = () => {
    this.setState(state => ({ unit: state.unit ==='c' ? 'f':'c' }));
  }

  updateWeather = data => {
    // const forecasts = response.data.data.forecast.slice(0, 10).map(forecast => {
    //   const date = new Date(forecast.time * 1000);
    //   const day = format(date, 'EEE');
    //   const time = format(date, 'HH:mm');                    
    //   return {
    //       day,
    //       time,
    //       highCelsius: forecast.maxCelsius,
    //       highFahrenheit: forecast.maxFahrenheit,
    //       lowCelsius: forecast.minCelsius,
    //       lowFahrenheit: forecast.minFahrenheit,
    //   };
    // });
    const city = data.city.name;
    const condition = data.current;   
    const forecasts = data.forecast.slice(0, 10); 
    this.setState({city, condition, forecasts });  
  }

  handleSearch = () => {
    getWeatherFor(this.state.input)
      .then(this.updateWeather);
  }

  handleInputChange = event => {
    this.setState({input: event.target.value});
  }

  render() {
    return (
      <div className="weather-channel__container">
        <Header />
        <Nav 
          handleInputChange={this.handleInputChange}
          inputValue={this.state.input}
          handleSearch={this.handleSearch}
          toggleUnit={this.toggleUnit}
          unit={this.state.unit}
          />
        <Main 
          unit={this.state.unit}
          city={this.state.city}
          condition={this.state.condition}
          forecasts={this.state.forecasts}
        />
        <Footer />
      </div>
    );
  }
}

const mapDispatchProps = dispatch => ({
  fetchWeatherData: city => dispatch(fetchDataThunkAction(city)),
});

export default connect(null, mapDispatchProps)(App);
