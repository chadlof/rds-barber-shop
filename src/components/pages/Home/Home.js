import React, { Component } from 'react';
// import PropTypes from 'prop-types'
import '../../../static/css/styles.css'
import Directions from './components/Directions'
import Gallery from './components/Gallery'
import AboveTheFold from './components/AboveTheFold'
import About from './components/About'




class Home extends Component {
    render() {
      return (
        <div className="Home-Container">
          <section >
            <AboveTheFold/>
          </section>
          <section >
            <Directions/>          
          </section>
          <section >
            <Gallery/>          
          </section>
          <section>
            <About/>
          </section>
        </div>
        
          
      );
    }
  }
  
  export default Home