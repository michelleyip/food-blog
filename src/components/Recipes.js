import React, { Component } from 'react';
import './assets/css/components.css';
import { Container, Row, Col} from 'react-bootstrap';

import { withRouter } from 'react-router-dom';
import Navigation from './parts/Navigation.js';
import Footer from './parts/Footer.js';

class Recipes extends Component {
    constructor(props) {
        super(props);
        this.state = {
            result:{},
            posts: []
        }
    }

    componentDidMount() {
        fetch('/allrecipes').then(function (result) {
            return result.json();
        })
            // .then(function (r) {
            //     console.log(r);
                .then(data =>{
                    this.setState({
                        posts: data.map(post=>({
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

    sendParam(id){
        this.props.history.push('/recipepost/'+id);
    }

    renderAllposts() {
        return this.state.posts.map((post, i) => (
            <Row onClick={this.sendParam.bind(this, post.id)}>
                <Col>{post.cuisine}</Col>
                <Col>{post.category}</Col>
                <Col>{post.title}</Col>
                <Col>{post.time}</Col>
            </Row>
        ));
    }


    render() {
    return (
         <div className="site">
         <Navigation/>
         <h1 className="page-title">All Recipes</h1>
         <Container>
         <Row>
                <Col>Cuisine</Col>
                <Col>Category</Col>
                <Col>Recipe</Col>
                <Col>Total Time</Col>
            </Row>
             {this.renderAllposts()}
         </Container>

         <Footer/>

        </div>
    );

}
}
export default withRouter(Recipes);
// export default Recipes;