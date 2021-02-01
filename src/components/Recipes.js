import React, { Component } from 'react';
import './assets/css/components.css';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

import { withRouter } from 'react-router-dom';
import Navigation from './parts/Navigation.js';
import Footer from './parts/Footer.js';

class Recipes extends Component {
    constructor(props) {
        super(props);
        this.state = {
            result: {},
            posts: [],
            search: "All Recipes",
            option: "",
        }
    }

    componentDidMount() {
        this.fetchAll();
    }

    fetchAll(){
        fetch('/allrecipes').then(function (result) {
            return result.json();
        })
            // .then(function (r) {
            //     console.log(r);
            .then(data => {
                this.setState({
                    posts: data.map(post => ({
                        id: post.recipe_id,
                        cuisine: post.recipe_cuisine,
                        category: post.recipe_category,
                        date: post.recipe_creation_time,
                        time: post.recipe_total_time,
                        title: post.recipe_title,
                    }))
                });
                console.log(JSON.stringify(data));
            }).catch(error => console.log(error));
    }
        
    

    sendParam(id) {
        this.props.history.push('/recipepost/' + id);
    }

    renderAllposts() {
        return this.state.posts.map((post, i) => (
            <Row onClick={this.sendParam.bind(this, post.id)} className={i % 2 ? 'click' : 'colour-bg click'}>
                <Col>{post.cuisine}</Col>
                <Col>{post.category}</Col>
                <Col>{post.title}</Col>
                <Col>{post.time} mins</Col>
            </Row>
        ));
    }

    handleChange(event) {
        console.log(event.target.value );
        this.setState({ search: event.target.value });
    }

    handleChangeOption(event) {
        console.log(event.target.value );
        this.setState({ option: event.target.value });
    }

    onSubmit(event){
        event.preventDefault();
        // console.log("Last: " + this.state.search);
        if(this.state.search==="All Recipes"){
            this.fetchAll();
        }
        else{
            fetch('/searchby/' + this.state.search+"/"+this.state.option,
            { method: 'GET', })
            .then(function (result) {
                return result.json();
            })
                // .then(function (r) {
                //     console.log(r);
                .then(data => {
                    this.setState({
                        posts: data.map(post => ({
                            id: post.recipe_id,
                            cuisine: post.recipe_cuisine,
                            category: post.recipe_category,
                            date: post.recipe_creation_time,
                            time: post.recipe_total_time,
                            title: post.recipe_title,
                        }))
                    });
                    console.log(JSON.stringify(data));
                }).catch(error => console.log(error));
            }
    }


    render() {
    const category_show =   
                                <Form.Control as="select" onChange={this.handleChangeOption.bind(this)}>
                                    {/* <option value="select"> */}
                                    <option>Main</option>
                                    <option>Starter</option>
                                    <option>Side</option>
                                    <option>Dessert</option>
                                    <option>Drink</option>
                                </Form.Control>

    const cuisine_show =  
                                <Form.Control as="select" onChange={this.handleChangeOption.bind(this)}>
                                    {/* <option value="select"> */}
                                    <option >British</option>
                         <option>Chinese</option>
                         <option >Korean</option>
                         <option >Japanese</option>
                         <option>Italian</option>
                         <option>French</option>
                         <option>Vietnamese</option>
                         <option>Thai</option>
                         <option>Malaysian</option>
                                </Form.Control>
                      

    let show_element= <p></p>

    if(this.state.search ==="All Recipes"){
        show_element= <p></p>;
    }
    else if(this.state.search ==="Cuisine"){
        show_element= cuisine_show;
    }
    else if(this.state.search ==="Category"){
        show_element= category_show;
    }
    else{}

        return (
            <div className="site">
                <Navigation />
                <h1 className="page-title">All Recipes</h1>
                <Container>
                    <Row>
                        <Form onSubmit={this.onSubmit.bind(this)}>
                        {/* <Form.Row> */}
                            <Form.Group as={Row} controlId="search">
                            <Col sm="12" md="2">  
                            <Form.Label>Search By:</Form.Label>
</Col>
                                <Col xs="4" md="3">
                                    <Form.Control as="select" onChange={this.handleChange.bind(this)}>
                                        {/* <option value="select"> */}
                                        <option>All Recipes</option>
                                        <option>Cuisine</option>
                                        <option>Category</option>
                                    </Form.Control>
                                </Col>
                                <Col xs="4" md="3"> {show_element}</Col>
                                <Col xs="2" md="2"><Button variant="outline-dark" type="submit"> Search</Button></Col>
                            </Form.Group>
                       {/* </Form.Row> */}
                       </Form>
                    </Row>

                    <Row>
                        <Col>Cuisine</Col>
                        <Col>Category</Col>
                        <Col>Recipe</Col>
                        <Col>Total Time</Col>
                    </Row>
                    {this.renderAllposts()}
                </Container>

                <Footer />

            </div>
        );

    }
}
export default withRouter(Recipes);
// export default Recipes;