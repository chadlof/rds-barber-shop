import React, { Component } from 'react';
// import PropTypes from 'prop-types'
import '../../../../../static/css/styles.css'
// import PhoneNum from '../../../../orginisms/Header/components/PhoneNum'


class Welcome extends Component {
    render() {
      return ( 
          <div className="Welcome-div">
                <h2>Welcome to RD's Barbershop!</h2>
                <p>At RD's you will find that getting a haircut can be a fun experience again.  
                    We are not like the typical chain salons.  
                    At RD's we strive to provide you with the best haircuts and atmosphere around, at an affordable price.  
                    We put you first not the other way around.
                </p>
                <p>RD's has a laid back atmosphere, you can either walk in or call ahead for an appointment.</p>
                <p>Our goal is to make you look good.</p>
            {/* <div className="Welcome-contact text-blue">
                <h2>Call Today!</h2>
                <PhoneNum/>
            </div> */}
            

          </div>    
           
            
      );
    }
  }
  
  export default Welcome