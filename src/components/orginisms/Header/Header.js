import React, { Component } from 'react';
// import PropTypes from 'prop-types'
import '../../../static/css/styles.css'
import Logo from '../../atoms/Logo'
import PhoneNum from './components/PhoneNum'
import Address from './components/Address'
import TopNav from './components/TopNav'


class Header extends Component {
    render() {
      return (
        <header >
            <div className="header-top">
                <PhoneNum/>
                <Address/>
            </div>
            <div className="header-bottom">
                <Logo/>
                <TopNav/>
            </div>
            
        </header>
      );
    }
  }
  
  export default Header