import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import 'onsenui/css/onsenui.css';

import 'onsenui/css/onsen-css-components.css';
import 'bootstrap/dist/css/bootstrap.css';

import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import ReduxPromise from "redux-promise";
import rootReducer from "./reducers/index";

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(rootReducer)}>
    <App />
  </Provider>
  , document.getElementById('root')
);

