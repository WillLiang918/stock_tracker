import React, {Component} from 'react';
import {Button, ButtonToolbar} from 'react-bootstrap';
import './../../stylesheets/Header.scss';

const Header = ({user}) => (
    <div className='header'>
      <span className='user-name'>Hi { user.name }!</span>
      <ButtonToolbar>
        <div className='sign-out-button'>
          <Button bsStyle="primary">Sign Out</Button>
        </div>
      </ButtonToolbar>
    </div>
);

export default Header;
