import React, { Component } from 'react';
// import PropTypes from 'prop-types'
import '../../../../../../../static/css/styles.css'



class Map extends Component {
    render() {
      return ( 
          <div className="Map-div">
                <iframe
                    // width="400"
                    height="300"
                    frameborder="0" 
                    src="https://www.google.com/maps/embed/v1/place?key=AIzaSyCN6zLYggcQMat5yLLqikn9f48naYLKQGY
                        &q=RD's+Barbershop,Albertville+MN" allowfullscreen>
                </iframe>
          </div>    
           
            
      );
    }
  }
  
  export default Map