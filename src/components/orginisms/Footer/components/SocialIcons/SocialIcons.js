import React, { Component } from 'react'
// import PropTypes from 'prop-types'
import '../../../../../static/css/styles.css'
import facebook from '../../../../../static/images/icons/facebook.png'
import google from '../../../../../static/images/icons/google-plus.png'
import twitter from '../../../../../static/images/icons/twitter.png'
import linkedin from '../../../../../static/images/icons/linkedin.png'

class SocialIcons extends Component{
    render() {
        return (
            <div className="SocialIcons-div">
                <a href="https://www.linkedin.com">
                    <img
                    src={linkedin}
                    alt="Google Maps Icon"
                    width="25"
                    />
                </a>
                <a href="https://www.facebook.com">
                    <img
                    src={facebook}
                    alt="FaceBook Icon"
                    width="30"
                    />
                </a>
                <a href="https://www.twitter.com">
                    <img
                    src={twitter}
                    alt="Google Maps Icon"
                    width="30"
                    />
                </a>
                <a href="https://www.plus.google.com">
                    <img
                    src={google}
                    alt="FaceBook Icon"
                    width="30"
                    />
                </a>
                
            </div>
        );
    }
  }
    
    export default SocialIcons