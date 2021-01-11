import React, { Component } from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import {NavLink} from 'react-router-dom';

import '../assets/css/parts.css';



class Navigation extends Component {
    constructor(props) {
      super(props);
      this.state = {
      };
    }





    render() {

    
    return (
      <header className="menu">
<Container fluid><Row>
  <Col md={8}>Blog Name</Col>
  <Col ><NavLink to="/" exact={true} activeClassName='active'>Home</NavLink></Col>
  <Col ><NavLink to="/about" exact={true} activeClassName='active'>Biography</NavLink></Col>
  <Col ><NavLink to="/recipes" exact={true} activeClassName='active'>Recipes</NavLink></Col>

  </Row></Container>
  
      </header>
    );

}
}





export default Navigation;