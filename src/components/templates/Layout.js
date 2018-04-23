import React, { Component } from 'react';
// import PropTypes from 'prop-types'
import '../../static/css/styles.css'
import Header from '../orginisms/Header'
import Footer from '../orginisms/Footer'

import { Switch, Route} from 'react-router-dom'
import Home from '../pages/Home'
import Directions from '../pages/Directions'
import Gallery from '../pages/Gallery'
import Contact from '../pages/Contact'
import About from '../pages/About'


class Layout extends Component {
    render() {
      console.log(window.location)
      return (
          <div className="mainContainer" >
            <Header/>
            <section className="LayoutSection">
              <Switch>
                <Route  exact path="/" component={Home}/>
                <Route  path="/directions" component={Directions}/> 
                <Route  exact path="/gallery" component={Gallery}/>
                <Route  exact path="/contact" component={Contact}/>
                <Route  exact path="/about" component={About}/>
              </Switch>
            </section>
            {/* <div className="tempContent"></div> */}
            <Footer/>

          </div>
      );
    }
  }
  
  export default Layout