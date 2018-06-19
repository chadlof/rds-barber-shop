import React from 'react';
// import PropTypes from 'prop-types'
import '../../../../../static/css/styles.css'
import ImageLoop from './components/ImageLoop'

const Gallery = () =>{
  return(
        <div className="Gallery-div">
          <h2>Gallery</h2>
          <div className="ImageLoop-div">
            <ImageLoop/>
          </div>
        </div>
  ) 

}
  
  export default Gallery