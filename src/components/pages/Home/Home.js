import React, { Component } from 'react';
// import PropTypes from 'prop-types'
import '../../../static/css/styles.css'
import Storefront from "./components/StorefrontPic"
import HomeInfo from './components/HomeInfo'
import Welcome from './components/Welcome'



class Home extends Component {
    render() {
      return (
        <div className="Home-Container">
          <div className="Home-topContainer">
            <div className="Home-top-left">
              <Storefront/>
            </div>
            <div className="Home-top-right">
              <HomeInfo/>
            </div>
          </div>

          <div className="Home-bottomContainer">
            <Welcome/>
          </div>
          
        </div>
        
          
      );
    }
  }
  
  export default Home