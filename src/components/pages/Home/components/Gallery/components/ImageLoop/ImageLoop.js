import { Component } from 'react'
import React from 'react'
// import fetch from 'isomorphic-fetch'
// import PropTypes from 'prop-types'
import '../../../../../../../static/css/styles.css'
import { createClient } from 'contentful'



export default class ImageLoop extends Component{
  constructor(props){
    super(props);
    this.state=
                {
                  galleryArray:[]
                }
  }
  
  componentDidMount(){
    const SPACE_ID = 'ydoyla0hfpsa'
    const ACCESS_TOKEN = '520ab46c09c6f5b4460d0f7e456c00c68ab825b22a6c0af41f660aee348d67b6'
  
    const client = createClient({
      space: SPACE_ID,
      accessToken: ACCESS_TOKEN
    })
    // fetch("client.getAsset('6EJc3zj38Wqg4WK8uSi8aM)")
    // .then((response) => (response.json()))
    // .then((data) => {
    //   this.setState({galleryArray:data.fields.file.url})
    // })
    client.getAsset('6EJc3zj38Wqg4WK8uSi8aM')
    .then((image1) =>  {
      this.setState({galleryArray:image1.fields.file.url})
    })
  }

  render () {
    return(
      <div className ="ImageLoop-img">
        <img
          src={this.state.galleryArray}
          alt=""
          />
      </div>
    );
  }
}


// const image1 = client.getAsset('6EJc3zj38Wqg4WK8uSi8aM')
//   .then((image1) =>  console.log('image1',image1.fields.file.url))



// const ImageLoop = () =>{
  
//     const images =[
      
//       // firstCut2,firstCut3,
//       // firstCut4,firstCut5,
//       // firstCut6,firstCut7,
//       // firstCut,mason,
//       // mason2,brian3,
//       // brian2,brian
//     ];

  
//     const imageComponents = images.map(function(path){
//       return(
//         <div className ="ImageLoop-img">
//           <img
//             src={path}
//             alt=""
           
//         />
//         </div>
        
//       );
//     })

//     return imageComponents
// }



