import React, { Component } from 'react';
// import PropTypes from 'prop-types'
import '../../../../../static/css/styles.css'
// import Img from 'react-image'
import storeFrontPic from '../../../../../static/images/storeFront.png'


class StorefrontPic extends Component {
    render() {
      return (     
        // <div className="StorefrontPic">
            <img  className="StorefrontPic"
                src={storeFrontPic} 
                alt=""
                // width="400px"
            
            />
        // </div>      
            
      );
    }
  }
  
  export default StorefrontPic