import React from "react";
import { Component } from "react";
import {Page} from 'react-onsenui';
import SearchBar from '../containers/search-bar';
import WeatherPanel from '../containers/weather-panel';
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import '../main.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      currentCity: "",
      cities: []
    };
  }

  addCity = (city) => {
    this.setState({ cities: [...this.state.cities, city] });
  }
  currentCity = (city) => {
    this.setState({ currentCity: city });
  }

  
  render() {
    
    const weatherPanels = Object.keys(this.props.weather.days || []).map( (day, index) => (
      <WeatherPanel key={day} today={index===0} day={day} city={this.props.weather.city} weatherRows={this.props.weather.days[day]}/>
    ));
    return (
      <div className="container">
        <Page >
          <h1 className="title">Jorge's Weather App</h1>
          <h2 className="title">5 day forecast</h2>
          <SearchBar city={this.state.city} addCity={this.addCity} currentCity={this.currentCity} cities={this.state.cities}/>
          
          {weatherPanels}
        </Page>
        
      </div>
    );
  }
}

function mapStateToProps({ weather }) {
  return { weather };
}

export default connect(mapStateToProps, null)(App);