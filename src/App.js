import React, { Component } from 'react';
import{BrowserRouter, Route, Switch} from 'react-router-dom';

import './components/assets/css/App.css';


import Home from './components/Home.js';
import About from './components/About.js';
import Recipes from './components/Recipes.js';
// import Beauty from './components/Beauty.js';
// import Food from './components/Food.js';
// import Lifestyle from './components/Lifestyle.js';
// import Newpost from './components/Newpost.js';
// import Blogpost from './components/Blogpost.js';


class App extends Component{

  render() {
    return (

<BrowserRouter>
      {/* <Navigation> */}
        <Switch>
          <Route path="/" component={Home} exact/>
          <Route path="/about" component={About}/>
          <Route path="/recipes" component={Recipes}/>
          {/* <Route path="/beauty" component={Beauty}/>
          <Route path="/food" component={Food}/>
          <Route path="/lifestyle" component={Lifestyle}/>
          <Route path="/newpost" component={Newpost}/>
          <Route path="/blogpost/:param" component={Blogpost}/> */}
        </Switch>
      {/* </Navigation> */}
      {/* <p className="App-intro">{this.state.data}</p> */}
      </BrowserRouter>



    // <div className="App">
      // <Navigation />
      /* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */
    // </div>
  );
}
}

export default App;
