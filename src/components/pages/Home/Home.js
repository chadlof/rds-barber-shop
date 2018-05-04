import React, { Component } from 'react';
// import PropTypes from 'prop-types'
import '../../../static/css/styles.css'
import HomeInfo from './components/HomeInfo'
import Welcome from './components/Welcome'
import storeFrontPic from '../../../static/images/storeFront.png'




class Home extends Component {
    render() {
      console.log("Home pic ulr",storeFrontPic)
      return (
        <div className="Home-Container">
          <div className="Home-topContainer">
            
              <img
              src={storeFrontPic}
              alt=""
              />
            
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