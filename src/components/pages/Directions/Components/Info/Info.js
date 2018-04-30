import React, { Component } from 'react';
// import PropTypes from 'prop-types'
import '../../../../../static/css/styles.css'
import Logo from '../../../../atoms/Logo'



class Info extends Component {
    render() {
      return ( 
          <div className="Directions-Info-div">
            <Logo className="Directions-Info-Logo"/>
            <h2 className="Directions-Info-h2 text-gray">
                11095 61st Street Northeast,
                <br/> Albertville, MN 55301
            </h2>

          </div>    
           
            
      );
    }
  }
  
  export default Info