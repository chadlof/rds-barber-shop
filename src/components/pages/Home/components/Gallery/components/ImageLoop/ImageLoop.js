import React from 'react';
// import PropTypes from 'prop-types'
import '../../../../../../../static/css/styles.css'
import firstCut from '../../../../../../../static/images/gallery/firstCut.png'
import firstCut2 from  '../../../../../../../static/images/gallery/firstCut2.jpg'
import firstCut3 from  '../../../../../../../static/images/gallery/firstCut3.jpg'
import firstCut4 from  '../../../../../../../static/images/gallery/firstCut4.jpg'
import firstCut5 from  '../../../../../../../static/images/gallery/firstCut5.jpg'
import firstCut6 from  '../../../../../../../static/images/gallery/firstCut6.jpg'
import firstCut7 from  '../../../../../../../static/images/gallery/firstCut7.jpg'
import mason from  '../../../../../../../static/images/gallery/mason.jpg'
import mason2 from  '../../../../../../../static/images/gallery/mason2.jpg'
import brian from  '../../../../../../../static/images/gallery/brian.jpg'
import brian2 from  '../../../../../../../static/images/gallery/brian2.jpg'
import brian3 from  '../../../../../../../static/images/gallery/brian3.jpg'



const ImageLoop = () =>{
  
    const images =[
      firstCut2,firstCut3,
      firstCut4,firstCut5,
      firstCut6,firstCut7,
      firstCut,mason,
      mason2,brian3,
      brian2,brian
    ];

  
    const imageComponents = images.map(function(path){
      return(
        <div className ="ImageLoop-img">
          <img
            src={path}
            alt=""
           
        />
        </div>
        
      );
    })

    return imageComponents
}

export default ImageLoop