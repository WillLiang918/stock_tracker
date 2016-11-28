import React, {Component, PropTypes} from 'react';
import StockItem from './StockItem'

class StockItemList extends Component {
  constructor(props) {
    super(props);

    this.onSelectDate = this.onSelectDate.bind(this);
  }

  onStockItemClick(itemId) {
    // redirects to the item's show page
  }

  onToggleTaxable(itemId) {
  }

  onSelectDate(date) {
  }

  renderStockItems(stockItems) {
    if (this.props.stockItems.length > 0) {
      return (
          <ul>
            {this.props.stockItems.map(stockItem =>
                <StockItem
                    key={stockItem.uuid}
                    stockItem={stockItem}
                    onClick={() => this.onStockItemClick(stockItem.uuid)}
                    onToggleTaxable={() => this.onToggleTaxable(stockItem.uuid)}
                    onSelectDate={(date) => this.onSelectDate }
                />
            )}
          </ul>
      )
    } else {
      return (
          <div>You do not have any stock items!</div>
      )
    }
  }

  render() {
    return (
        <div>
          {this.renderStockItems()}
        </div>
    )

  }
}

StockItemList.propTypes = {
  stockItem: PropTypes.arrayOf(PropTypes.shape({
    uuid: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    taxable: PropTypes.bool.isRequired
  }))
};

export default StockItemList;
