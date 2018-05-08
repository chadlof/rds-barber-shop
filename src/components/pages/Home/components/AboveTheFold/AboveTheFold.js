import React, {Component} from 'react';
// import PropTypes from 'prop-types'
import '../../../../../static/css/styles.css'
import storeFrontPic from'../../../../../static/images/storeFront.png'
import HomeInfo from './components/HomeInfo'
import Welcome from './components/Welcome'

class AboveTheFold extends Component{
  render() {
      return (
        <div className="AboveTheFold-div">
           <img
            src={storeFrontPic}
            alt=""
            width="350"
          />  
          <div className="Home-top-right">
            <HomeInfo/>
          </div>
          <div className="Home-bottomContainer">
            <Welcome/>
          </div>
        </div>
       
          
      );
  }
}
  
  export default AboveTheFold