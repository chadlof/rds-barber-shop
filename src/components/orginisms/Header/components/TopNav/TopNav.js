import React, { Component } from 'react';
import { Link} from 'react-router-dom'
// import PropTypes from 'prop-types'
import '../../../../../static/css/styles.css'



class TopNav extends Component {
    render() {
      return (
          <div className="TopNav-div">
            <ul className="TopNav-ul">
              <li><Link className="a"
                        activeClassName="active" 
                        acttiveStyle={{color:'red'}}
                        to="/">Home</Link></li>
              <li><Link className="a"to="/directions">Directions</Link></li>
              <li><Link className="a"to="/gallery">Gallery</Link></li>
              <li><Link className="a"to="/contact">Contact</Link></li>
              <li><Link className="a"to="/about">About</Link></li>
           </ul>
          </div>  
      );
    }
  }
  
  export default TopNav