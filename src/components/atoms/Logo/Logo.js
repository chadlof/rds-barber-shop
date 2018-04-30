import React, { Component } from 'react';
// import PropTypes from 'prop-types'
import '../../../static/css/styles.css'
import RDsLogo from '../../../static/images/RDsLogo.png'

class Logo extends Component {
    render() {
      return (
        <div className="Logo-div">
            <img src={RDsLogo} className="Logo-img" alt="RDs logo" />
            <h3 className="Logo-h3">Babershop</h3>
        </div>
      );
    }
  }
  
  export default Logo