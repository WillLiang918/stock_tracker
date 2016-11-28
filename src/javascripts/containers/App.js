import React, {Component} from 'react';
import {connect} from 'react-redux';
import Header  from './../components/Header.js';
import HomePage  from './HomePage.js';


class App extends Component {
  render() {
    return (
        <div>
          <Header user={ this.props.user } />
          <HomePage />
        </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    user: state.user,
    stockItems: state.stockItems
  }
}
export default connect(mapStateToProps)(App);
