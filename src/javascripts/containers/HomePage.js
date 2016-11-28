import React, {Component} from 'react';
import {connect} from 'react-redux';
import StockItemList from './../components/StockItemList'
import AddStockItem from './../containers/AddStockItem'

class HomePage extends Component {
  render() {
    return (
        <div>
          <h2>Inventory Count { this.props.stockItems.length }</h2>
          <AddStockItem />
          <StockItemList stockItems={ this.props.stockItems } />
        </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    stockItems: state.stockItems
  }
}

export default connect(mapStateToProps)(HomePage);
