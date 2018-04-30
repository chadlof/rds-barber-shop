import React, { Component } from 'react';
// import PropTypes from 'prop-types'
import '../../../static/css/styles.css'
import Map from './Components/Map'
import Info from './Components/Info'



class Directions extends Component {
    render() {
      return ( 
        <div className="Directions-div">
          <Map/>
          <Info/>
        </div>
      );
    }
  }
  
  export default Directions