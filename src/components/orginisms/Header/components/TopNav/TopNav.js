import React, { Component } from 'react';
// import PropTypes from 'prop-types'
import '../../../../../static/css/styles.css'


class TopNav extends Component {
    render() {
      return (
          <div className="TopNav-div">
            <ul className="TopNav-ul">
              <li><a href="../../../../../../index.js">Home</a></li>
              <li><a href="../../../../../../index.js">Directions</a></li>
              <li><a href="../../../../../../index.js">Gallery</a></li>
              <li><a href="../../../../../../index.js">Contact</a></li>
              <li><a href="../../../../../../index.js">About</a></li>
          </ul>
          </div>
      );
    }
  }
  
  export default TopNav