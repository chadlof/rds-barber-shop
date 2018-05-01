import React from 'react';
import PropTypes from 'prop-types'
import '../../../static/css/styles.css'




const Img = (props) => {
  const {path, alt, width} = props
      return (     
            <img  className="Img"
                src={path} 
                alt={alt}
                width={width}
            />  
      );
    }
  
  export default Img

  Img.propTypes = {
    path: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    width: PropTypes.string.isRequired,
}