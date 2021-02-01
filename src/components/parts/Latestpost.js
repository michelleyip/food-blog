import React, { Component } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { withRouter } from 'react-router-dom';
import '../assets/css/parts.css';
import moment from 'moment';



class Latestpost extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    sendParam(){
        this.props.history.push('/recipepost/'+this.props.id);
    }

    render() {
        const img =     <img src={this.props.img} alt="main-img" className="latest-img" />
        const text =    <Container fluid>
                            <Row>
                                <Col xs={5}>{this.props.cuisine} / {this.props.category}</Col>
                                <Col xs={{ span: 5, offset: 2 }}>  {moment(this.props.date).format('MMMM, YYYY')}</Col>
                            </Row>
                            <Row>
                                <Col md={{ span: 10, offset: 1 }}><h2>{this.props.recipe_title}</h2><p>{this.props.total_time} mins</p></Col>
                            </Row>
                            <Row>
                                <Col md={12}>
                                    <Button className="latest-button" variant="outline-dark" onClick={this.sendParam.bind(this)}>Read Recipe</Button>
                                </Col>

                            </Row>
                        </Container>

        if (this.props.pos) {
            return (
                <Container className="main-latest" onClick={this.sendParam.bind(this)}>
                    <Row noGutters="true">
                        <Col md={{span:6, order:1}} xs={{span:12, order:1}}>
                        {img}
                        </Col>
                        <Col md={{span:6, order:2}} xs={{span:12, order:2}} className="latest-text">
                        {text}
                        </Col>
                    </Row>
                </Container>
            );
        }
        else {
            return (
                <Container className="main-latest" onClick={this.sendParam.bind(this)}>
                    <Row noGutters="true">
                    <Col md={{span:6, order:1}} xs={{span:12, order:2}} className="latest-text">
                        {text}
                        </Col>
                    <Col md={{span:6, order:2}} xs={{span:12, order:1}}>
                        {img}
                        </Col>
                        
                    </Row>
                </Container>
            );
        }
    }
}

export default withRouter(Latestpost);
// export default Latestpost;