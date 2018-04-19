import React, { Component } from 'react';
import { Link} from 'react-router-dom'
// import PropTypes from 'prop-types'
import '../../../../../static/css/styles.css'



class TopNav extends Component {
    render() {
      return (
          <div className="TopNav-div">
            <ul className="TopNav-ul">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/directions">Directions</Link></li>
              <li><Link to="/">Gallery</Link></li>
              <li><Link to="/">Contact</Link></li>
              <li><Link to="/">About</Link></li>
           </ul>
          </div>  
      );
    }
  }
  
  export default TopNav