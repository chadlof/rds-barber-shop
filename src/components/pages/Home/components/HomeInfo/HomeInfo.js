import React, { Component } from 'react';
// import PropTypes from 'prop-types'
import '../../../../../static/css/styles.css'


class HomeInfo extends Component {
    render() {
      return ( 
          <div className="text-white HomeInfo-div">
            <h2 className="text-red">Hours</h2>
            <h3>Tuesday    8:00 am - 6:00pm</h3>
            <h3>Wednesday  8:00 am - 6:00pm</h3>
            <h3>Thursday   8:00 am - 6:00pm</h3>
            <h3>Friday     8:00 am - 3:00pm</h3>
            <h3>Sunday     Closed</h3>
            <h3>Monday     Closed</h3>  
          </div>    
           
            
      );
    }
  }
  
  export default HomeInfo