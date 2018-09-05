import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { fetchWeather } from "../actions/index";
import {SearchInput, Button} from 'react-onsenui';


class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = { city: "" };
  }

  onSubmit = (param, event) => {
    event.preventDefault();
    //Fetch weather data
    if (param === "new") {
      this.props.fetchWeather(this.state.city).then(() => {
        this.props.addCity(this.props.weather.city);
        this.props.currentCity(this.props.weather.city);
        this.setState({ city: "" });
      })
    } else {
      this.props.fetchWeather(event.target.innerText).then(() => {
        this.props.currentCity(this.props.weather.city);
        this.setState({ city: "" });
      })
    }
  }

  render() {
    const weather = this.props.weather
    return (
      <div className="container">
        <div className="row">
          <SearchInput
            class="mx-auto input"
            value={this.props.city}
            onChange={(event) => { this.setState({city: event.target.value})} }
            modifier='material'
            placeholder='Carrboro'
          />
          
        </div>
        <div className="row search-button">
        <Button modifier="material" onClick={(evt) => this.onSubmit("new", evt)} class="mx-auto">
          Search
        </Button>
        </div>
        <div>
          <div className="list-group">
          {
            this.props.cities.length > 0 ?
            <h2 className="text-center">Searched cities, click a city to view weather again!</h2> : <span></span>
          }
            
            {
              this.props.cities.map((city, i) => {
                return (
                  <a href="#" className="list-group-item list-group-item-action w-50 mx-auto" key={i} onClick={(evt) => this.onSubmit("existing", evt)} >
                  {city}
                  </a>
                )
              })
            }
          </div>
        </div>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchWeather }, dispatch);
}
function mapStateToProps({ weather }) {
  return { weather };
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);