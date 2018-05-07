import React, { Component } from 'react';
// import PropTypes from 'prop-types'
import '../../../static/css/styles.css'
import SocialIcons from './components/SocialIcons'
import Address from './components/Address'



class Header extends Component {
    render() {
      return (
        <footer>
          {/* <div className="footer-slogan">
            <h4>Anybody can cut hair off, but a barber knows when and where to stop.</h4>
          </div> */}
          <div className="footer-bottom">
            <SocialIcons/>
            <Address/>
          </div>
          <div className="footer-slogan">
            <h4>Anybody can cut hair off, but a barber knows when and where to stop.</h4>
          </div>
        </footer>
      );
    }
  }
  
  export default Header