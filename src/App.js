import React from 'react';
import {connect } from 'react-redux';
import './styles/_app.scss';
import {getWeatherFor} from './utils/axios.js';
import Header from './components/Header/Header';
import Search from './components/Search/Search';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';

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
    console.log(data);
    const city = data.city;
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
        <Search 
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
