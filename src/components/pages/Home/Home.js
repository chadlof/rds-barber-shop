import React, { Component } from 'react';
// import PropTypes from 'prop-types'
import '../../../static/css/styles.css'
import Img from "../../atoms/Img"
import HomeInfo from './components/HomeInfo'
import Welcome from './components/Welcome'
import storeFrontPic from '../../../static/images/storeFront.png'



class Home extends Component {
    render() {
      return (
        <div className="Home-Container">
          <div className="Home-topContainer">
            <div className="Home-top-left">
              <Img
              path={storeFrontPic}
              alt=""
              width="500px"
              />
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