import React, { Component } from 'react';
// import PropTypes from 'prop-types'
import '../../../../../static/css/styles.css'
import ron from'../../../../../static/images/ron.jpg'



class About extends Component {
    render() {
      return (
        <div className="About-div">
          <h2>About RD's</h2>
          <div className="bio-div">
          <p className="bio-p">
            <img 
              src={ron}
              alt=""
              width="150px"
            />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed consequat mauris et erat euismod, sed gravida mauris lobortis. Maecenas luctus dui non massa sagittis condimentum. Sed eleifend turpis eu malesuada varius. Maecenas condimentum mattis erat in lobortis. Nam convallis felis in rhoncus fermentum. Vestibulum dolor metus, egestas vel magna eget, pellentesque hendrerit lorem. Pellentesque congue id orci eu ultrices. Suspendisse tristique tristique mi, ut iaculis lacus condimentum in. Nam posuere ligula et tristique vehicula. Vestibulum id porttitor nunc.</p>
            <p>Mauris pellentesque, erat ut posuere egestas, felis urna imperdiet quam, eu placerat ligula ipsum in dolor. Sed consequat, lectus nec scelerisque commodo, mauris eros faucibus augue, pharetra posuere augue nulla ac justo. Ut sodales, ante id dignissim pellentesque, nunc mi pulvinar nulla, vitae viverra tortor ligula eget elit. Suspendisse nec feugiat erat. Morbi non diam consectetur, egestas dui eu, suscipit felis. Morbi non tempor est. Nulla feugiat magna ex, a hendrerit lacus accumsan sit amet. Aenean faucibus sit amet ligula et imperdiet. Nulla dictum elit sit amet consectetur rutrum. Ut sit amet lobortis elit. Pellentesque quis venenatis nisl. Ut feugiat sed sapien id tincidunt. Vestibulum velit magna, sollicitudin quis augue non, sollicitudin cursus diam.</p>
            <p>Vestibulum gravida eleifend erat, et dignissim risus faucibus at. Fusce elit nisl, ultrices eget tortor eget, laoreet dapibus lacus. Mauris rutrum eget neque at finibus. Curabitur molestie lacus in tempus fringilla. Vestibulum imperdiet tortor sed massa ultrices fermentum. Nulla facilisi. Quisque vel lacus felis. Suspendisse ullamcorper vehicula aliquet. Ut tincidunt dui sit amet diam mattis, at fermentum nibh luctus. Praesent sagittis malesuada libero, et viverra magna iaculis sit amet. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam vitae pulvinar nisl, ac sollicitudin tellus.</p>
          </div>
        </div>
      );
    }
  }
  
  export default About