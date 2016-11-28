// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './App';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux'
import stockApp from '../reducers.js'
import App from './App';
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
      price: '2.99',
      taxable: true
    },
    {
      uuid: '489d5404-b416-11e6-80f5-76304dec7eb7',
      name: 'Canned Water',
      description: 'Same great taste but in a can.',
      price: '3.99',
      taxable: false
    },
    {
      uuid: '489d5508-b416-11e6-80f5-76304dec7eb7',
      name: 'Paper Candles',
      description: 'Fastest burning candles in the market!',
      price: '0.59',
      taxable: true
    }]
};

let store = createStore(stockApp, hydrateStore);

it('renders without crashing', () => {
  const root = document.createElement('root');
  ReactDOM.render(
      <Provider store={ store }>
        <App />
      </Provider>
      ,
      root
  );
});


