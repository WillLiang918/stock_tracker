import React, {PropTypes, Component} from 'react'
import Calendar from 'react-input-calendar'
import 'react-input-calendar/style/index.css';

class StockItem extends Component {
  constructor(props) {
    super(props);

    this.onSelectNewDate = this.onSelectNewDate.bind(this);
  }

  onSelectNewDate(date) {
    this.props.onSelectDate(date)
  }

  render() {
    return (
        <li>
          <h1 className="item-name" onClick={ this.props.onClick }>{ this.props.stockItem.name }</h1>
          <p className="item-description">{ this.props.stockItem.description }</p>
          <Calendar format='DD/MM/YYYY' date={ this.props.stockItem.date } onChange={ this.onSelectNewDate }/>
          <span className="item-price">$ { this.props.stockItem.price }</span>
          <span>
            Taxable <input type="checkbox" checked={ this.props.stockItem.taxable } onChange={ this.props.onToggleTaxable }/>
          </span>
        </li>
    )
  }
}

StockItem.propTypes = {
  onClick: PropTypes.func.isRequired
};

export default StockItem
  