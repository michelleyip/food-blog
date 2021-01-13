import React, { Component } from 'react';
import{BrowserRouter, Route, Switch} from 'react-router-dom';

import './components/assets/css/App.css';


import Home from './components/Home.js';
import About from './components/About.js';
import Recipes from './components/Recipes.js';
import Recipe from './components/Recipepost.js';

// import Beauty from './components/Beauty.js';
// import Food from './components/Food.js';
// import Lifestyle from './components/Lifestyle.js';
// import Newpost from './components/Newpost.js';
// import Blogpost from './components/Blogpost.js';


class App extends Component{

state={
  data:null
};

componentDidMount(){
  this.callBackendAPI()
    .then(res=>this.setState({ data:res.express}))
    .catch(err=>console.log(err));
}

callBackendAPI= async()=>{
  const response = await fetch('/express_backend');
  const body = await response.json();

  if(response.status !==200){
    throw Error(body.message)
  }
  return body;
};



  render() {
    return (

<BrowserRouter>
        <Switch>
          <Route path="/" component={Home} exact/>
          <Route path="/about" component={About}/>
          <Route path="/recipes" component={Recipes}/>
          <Route path="/recipepost/:param" component={Recipe}/>

          {/* <Route path="/beauty" component={Beauty}/>
          <Route path="/food" component={Food}/>
          <Route path="/lifestyle" component={Lifestyle}/>
          <Route path="/newpost" component={Newpost}/>
          <Route path="/blogpost/:param" component={Blogpost}/> */}
        </Switch>
      {/* <p className="App-intro">{this.state.data}</p> */}
      </BrowserRouter>
  );
}
}

export default App;
