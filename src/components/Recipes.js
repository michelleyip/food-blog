import React, { Component } from 'react';
import './assets/css/components.css';



import Navigation from './parts/Navigation.js';
import Footer from './parts/Footer.js';



class Recipes extends Component {
    // constructor(props) {
    //   super(props);
    //   this.state = {
    //   };
    // }





    render() {

    
    return (
         <div className="site">
         <Navigation/>
         <Footer/>

        </div>
    );

}
}





export default Recipes;