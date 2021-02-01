import React, { Component } from 'react';
import './assets/css/components.css';
import { Container, Row, Col } from 'react-bootstrap';

import Navigation from './parts/Navigation.js';
import Footer from './parts/Footer.js';

import christmasbg from './assets/img/christmasbg.png';


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
         <Container>
             <Row>
             <Col md={6}>
             A bunch of handy recipes all in one place
             </Col>
             <Col  md={6}>
          <img className="img-box" src={christmasbg} alt="about"></img>
             </Col></Row></Container>
         <Footer/>

        </div>
    );

}
}
export default About;