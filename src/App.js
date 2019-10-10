import React from 'react';
import './App.css';
import axios from 'axios';
import { format} from 'date-fns';

import Header from './Header';
import Nav from './Nav';
import Main from './Main';
import Footer from './Footer';

//import cityWeather from './feakWeatherData.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      forecasts:[],
      limit: 10,
    };
  }
  componentDidMount() {
    //fetch data
    axios('https://jr-weather-api.herokuapp.com/api/weather?cc=au&city=brisbane')
      .then(response => {
        const forecasts = response.data.data.forecast.slice(0, 10).map(forecast => {
          const date = new Date(forecast.time * 1000);
          const day = format(date, 'EEE');
          const time = format(date, 'HH:mm');                    
          return {
              day,
              time,
              high: forecast.maxCelsius,
              low: forecast.minCelsius,
          };
        });
      this.setState({ forecasts });           
    });
  }

  changeLimit = limit => {
    this.setState({limit});
  }


  render() {
    return (
      <div className="weather-channel__container">
        <Header />
        <Nav />
        <Main 
          forecasts={this.state.forecasts.slice(0, this.state.limit)}
          changeLimit={this.changeLimit} 
          limit={this.state.limit}
        />
        <Footer />
      </div>
    );
  }

}

export default App;
