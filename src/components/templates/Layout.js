import React, { Component } from 'react';
// import PropTypes from 'prop-types'
import '../../static/css/styles.css'
import Header from '../orginisms/Header'
import Footer from '../orginisms/Footer'


class Layout extends Component {
    render() {
      return (
          <div className="mainContainer" >
            <Header/>
            <div className="tempContent"></div>
            <Footer/>
          </div>
      );
    }
  }
  
  export default Layout