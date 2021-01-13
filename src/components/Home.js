import React, { Component } from 'react';
import './assets/css/components.css';

import Navigation from './parts/Navigation.js';
import Latestpost from './parts/Latestpost.js';
import Footer from './parts/Footer.js';

import christmasbg from './assets/img/christmasbg.png';

class Home extends Component {
    constructor() {
        super();
        this.state = {
            result:{},
            posts: []
        }
    }

    componentDidMount() {
        fetch('/latestrecipes').then(function (result) {
            return result.json();
        })
            // .then(function (r) {
            //     console.log(r);
                .then(data =>{
                    this.setState({
                        posts: data.map(post=>({
                            id: post.recipe_id,
                            // creation_time = post.recipe_creation_time,
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

    renderLatestposts() {
        return this.state.posts.map((post, i) => (
            <Latestpost
                id={post.id}
                cuisine = {post.cuisine}
                category={post.category}
                date ={post.date}
                recipe_title={post.title}
                total_time={post.time}
                img={christmasbg}
                pos={(i % 2 === 0)}
            />
        ));
    }

    render() {
        return (
            <div className="site">
                <Navigation />
                <h1 className="page-title">Latest Recipes</h1>
                {this.renderLatestposts()}
                <Footer />
            </div>
        );
    }
}

export default Home;