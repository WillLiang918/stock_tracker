import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux'
import stockApp from './javascripts/reducers.js'
import App from './javascripts/containers/App';
import './stylesheets/index.css';

// Assume the user is already authenticated and authorized
let hydrateStore = {
  user: {
    name: 'John Doe',
    userApiKey: 'someCrazyHash'
  },
  stockItems: [
    {
      uuid: '489d51a2-b416-11e6-80f5-76304dec7eb7',
      name: 'Broken Pen',
      description: 'The best pen you will ever own!',
      date: '12-12-2020',
      price: '2.99',
      taxable: true
    },
    {
      uuid: '489d5404-b416-11e6-80f5-76304dec7eb7',
      name: 'Canned Water',
      description: 'Same great taste but in a can.',
      date: '1-1-2020',
      price: '3.99',
      taxable: false
    },
    {
      uuid: '489d5508-b416-11e6-80f5-76304dec7eb7',
      name: 'Paper Candles',
      description: 'Fastest burning candles in the market!',
      date: '11-11-1111',
      price: '0.59',
      taxable: true
    }]
};

let store = createStore(stockApp, hydrateStore);

ReactDOM.render(
    <Provider store={ store }>
      <App />
    </Provider>
    ,
    document.getElementById('root')
);
