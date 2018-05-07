import React, {Component} from 'react';
// import PropTypes from 'prop-types'
import '../../../static/css/styles.css'
import firstCut from '../../../static/images/gallery/firstCut.png'
import firstCut2 from  '../../../static/images/gallery/firstCut2.jpg'
import firstCut3 from  '../../../static/images/gallery/firstCut3.jpg'
import firstCut4 from  '../../../static/images/gallery/firstCut4.jpg'
import firstCut5 from  '../../../static/images/gallery/firstCut5.jpg'
import firstCut6 from  '../../../static/images/gallery/firstCut6.jpg'
import firstCut7 from  '../../../static/images/gallery/firstCut7.jpg'
import boyCut from  '../../../static/images/gallery/boyCut.png'



const ImageLoop = () =>{
  
    const images =[
      firstCut,
      firstCut2,
      firstCut3,
      firstCut4,
      firstCut5,
      firstCut6,
      firstCut7,
      boyCut
    ];

  
    const imageComponents = images.map(function(path){
      return(
        <img
            src={path}
            alt=""
            width="400"
        />
      );
    })

    return imageComponents
}

export default ImageLoop