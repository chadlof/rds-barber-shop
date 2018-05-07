import React, {Component} from 'react';
// import PropTypes from 'prop-types'
import '../../../../../static/css/styles.css'
import ImageLoop from './components/ImageLoop'

class Gallery extends Component{
  render() {
      return (
        <div className="Gallery-div">
          <h2>Gallery</h2>
          <div className="ImageLoop-div">
          <ImageLoop/>
          </div>
        </div>
          
      );
  }
}
  
  export default Gallery