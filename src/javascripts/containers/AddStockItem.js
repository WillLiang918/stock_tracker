import React, {Component} from 'react';
import {Button, ButtonToolbar} from 'react-bootstrap';
import {connect} from 'react-redux';

class AddStockItem extends Component {
  render() {
    return (
        <ButtonToolbar>
          <Button bsStyle="primary">Default button</Button>
        </ButtonToolbar>
    )
  }

}

export default AddStockItem;