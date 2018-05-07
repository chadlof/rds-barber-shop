import React, { Component } from 'react';
// import PropTypes from 'prop-types'
import '../../../static/css/styles.css'
import HomeInfo from './components/HomeInfo'
import Welcome from './components/Welcome'
import storeFrontPic from '../../../static/images/storeFront.png'




class Home extends Component {
    render() {
      return (
        <div className="Home-Container">
          <section className="Home-topContainer">
            <img
            src={storeFrontPic}
            alt=""
            width="400"
            />
            <div className="Home-top-right">
              <HomeInfo/>
            </div>
          </section>

          <section className="Home-bottomContainer">
            <Welcome/>
          </section>
        </div>
        
          
      );
    }
  }
  
  export default Home