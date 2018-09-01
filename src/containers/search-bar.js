import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { fetchWeather } from "../actions/index";
import {SearchInput, Button} from 'react-onsenui';


class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = { text: "" };
  }

  onFormSubmit = (event) => {
    event.preventDefault();
    console.log('Submitted');
    //Fetch weather data
    // this.props.fetchWeather(this.state.text);
    this.setState({ text: "" });
  }

  render() {
    return (
      <div className="row">
        <SearchInput
          class="col-sm"
          value={this.state.text}
          onChange={(event) => { this.setState({text: event.target.value})} }
          modifier='material'
          placeholder='Carrboro' 
        />
        <Button modifier="large--cta" onClick={this.onFormSubmit} class="col-sm">
          Search
        </Button>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchWeather }, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);