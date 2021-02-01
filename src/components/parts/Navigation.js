import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

import '../assets/css/parts.css';
import christmasbg from '../assets/img/christmasbg.png';

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
          <Col lg={8} md={6} sm={4} xs={5} className="blog-title"> <NavLink to="/" exact={true}>BLOG NAME</NavLink></Col>
          <Col ><NavLink to="/" exact={true} activeClassName='active'>Home</NavLink></Col>
          <Col ><NavLink to="/about" exact={true} activeClassName='active'>Biography</NavLink></Col>
          <Col ><NavLink to="/recipes" exact={true} activeClassName='active'>Recipes</NavLink></Col>
        </Row></Container>
        <div className="main-img">  <img src={christmasbg} alt="main-img" />
        </div>
      </header>
    );
  }
}

export default Navigation;