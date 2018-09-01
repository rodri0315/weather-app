import React from "react";
import { Component } from "react";
import {Page} from 'react-onsenui';
import SearchBar from '../containers/search-bar';

export default class App extends Component {
  render() {
    return (
      <div>
        <Page>
          <h3>Weather App!</h3>
          <SearchBar />
        </Page>
      </div>
    );
  }
}