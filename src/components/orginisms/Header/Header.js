import React, { Component } from 'react';
// import PropTypes from 'prop-types'
import '../../../static/css/styles.css'
import Logo from '../../atoms/Logo'
import PhoneNum from './components/PhoneNum'



class Header extends Component {
    render() {
      return (
        <header className="sticky">
          <div className="header-container">
            <Logo/>
            <div className="header-call-today-div">
                <h2 className="header-call-today-h2">Call Today!</h2>
                <PhoneNum/>
            </div>
          </div>
        </header>
      );
    }
  }
  
  export default Header