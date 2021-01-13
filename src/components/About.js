import React, { Component } from 'react';
import './assets/css/components.css';

import Navigation from './parts/Navigation.js';
import Footer from './parts/Footer.js';

class About extends Component {
    // constructor(props) {
    //   super(props);
    //   this.state = {
    //   };
    // }

    render() {
    return (
         <div className="site">
         <Navigation/>
         <h1 className="page-title">About</h1>

         <Footer/>

        </div>
    );

}
}
export default About;