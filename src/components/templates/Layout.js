import React, { Component } from 'react';
// import PropTypes from 'prop-types'
import '../../static/css/styles.css'
import Header from '../orginisms/Header'
import Footer from '../orginisms/Footer'

import { Switch, Route} from 'react-router-dom'
import Home from '../pages/Home'
import Directions from '../pages/Directions'


class Layout extends Component {
    render() {
      console.log(window.location)
      return (
          <div className="mainContainer" >
            <Header/>
            <section>
              <Switch>
                <Route  exact path="/" component={Home}/>
                <Route  path="/directions" component={Directions}/> 
              </Switch>
            </section>
            <div className="tempContent"></div>
            <Footer/>

          </div>
      );
    }
  }
  
  export default Layout