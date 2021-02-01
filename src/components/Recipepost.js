import React, { Component } from 'react';
import './assets/css/components.css';

import { withRouter } from 'react-router-dom';
import moment from 'moment';
import { Container, Row, Col } from 'react-bootstrap';
import christmasbg from './assets/img/christmasbg.png';

import Navigation from './parts/Navigation.js';
import Footer from './parts/Footer.js';
import ReactHtmlParser from 'react-html-parser'; 


class Recipepost extends Component {
    constructor(props) {
        super(props);
        this.state = {
            param_id: this.props.match.params.param,
            post: {},
        };
    }

    setParam() {
        this.setState({ param_id: this.props.match.params.param });
    }

    componentDidMount() {
        const post_id = this.state.param_id;
        fetch('/singlerecipe/' + post_id,
            { method: 'GET', })
            .then(function (result) {
                return result.json();
            })
            .then(function (jsonData) {
                console.log(JSON.stringify("Results" + jsonData));
                return jsonData[0];
            })
            .then(results =>
                this.setState({
                    post: results,
                }))
            .catch(error => console.log(error));

    }

    render() {
        let date = new Date(this.state.post.recipe_creation_time);
        return (
            <div className="site">
                <Navigation />
                <h1 className="page-title"> {this.state.post.recipe_title}</h1>

                < Container>
                <Row>
                <Col md={5}><img className="img-box" src={christmasbg} alt="about"></img>
</Col>
                <Col md={7}>
                    <Row>   {moment(this.state.post.recipe_creation_time).format('dddd, D MMMM YYYY')}</Row>
                    <Row> {this.state.post.recipe_category} /   {this.state.post.recipe_cuisine}</Row>
                    <Row>Description: {this.state.post.recipe_description}</Row>
                    <Row>Author: {this.state.post.recipe_author}</Row>
                    <Row>Prep time: {this.state.post.recipe_prep_time} mins</Row>
                    <Row>Cook time: {this.state.post.recipe_cook_time} mins</Row>
                    <Row>Servings: {this.state.post.recipe_servings}</Row>
                    </Col>
                    </Row>
                    <Row> <h2 className="subheading">Ingredients:</h2></Row>
                    <Row>
                        <Col>{ReactHtmlParser(this.state.post.recipe_ingredients)}</Col>
                    </Row>
                    <Row><h2 className="subheading">Recipe:</h2></Row>
                    <Row> {ReactHtmlParser(this.state.post.recipe_content)}  </Row>
                    {/* {this.state.post.recipe_img} */}

                </Container>

                <Footer />
            </div>
        );

    }
}
export default Recipepost;