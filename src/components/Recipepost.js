import React, { Component } from 'react';
import './assets/css/components.css';

import { withRouter } from 'react-router-dom';
import moment from 'moment';


import Navigation from './parts/Navigation.js';
import Footer from './parts/Footer.js';

class Recipepost extends Component {
    constructor(props) {
      super(props);
      this.state = {
          param_id: this.props.match.params.param,
          post:{},
      };
    }

    setParam(){
        this.setState({ param_id: this.props.match.params.param});
    }

    componentDidMount(){
        const post_id = this.state.param_id;
        fetch('/singlerecipe/'+post_id,
        {method: 'GET', })
        .then(function(result){
            return result.json();
        })
        .then(function(jsonData){
            console.log(JSON.stringify("Results" + jsonData));
            return jsonData[0];
        })
        .then(results=>
            this.setState({
                post: results,
            }))
        .catch(error =>console.log(error));

    }

    render() { let date = new Date(this.state.post.recipe_creation_time);
    return (
         <div className="site">
         <Navigation/>

            <div>
                {this.state.post.recipe_id}
                <br />
                {/* {new Intl.DateTimeFormat('en-GB',{
                                            weekday:'long',
                                            day: 'numeric',
                                            year: 'numeric',
                                            month: 'long'
                }).format(date.getTime())} */}
                {/* {moment(this.state.post.recipe_creation_time).format('DD MMM, YYYY')} */}
                {moment(this.state.post.recipe_creation_time).format('dddd, D MMMM YYYY')}

                {this.state.post.recipe_title}
                {this.state.post.recipe_category}
                {this.state.post.recipe_cuisine}
                {this.state.post.recipe_prep_time}
                {this.state.post.recipe_serving}
                {this.state.post.recipe_cook_time}
                {this.state.post.recipe_author}
                {this.state.post.recipe_ingredients}
                {this.state.post.recipe_content}
                {/* {this.state.post.recipe_img} */}


            </div>
        


         <Footer/>
        </div>
    );

}
}
export default Recipepost;