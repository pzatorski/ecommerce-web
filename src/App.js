import React, { Component } from 'react';
import { BrowserRouter as HashRouter, Route } from 'react-router-dom';

import LandingPage from './landing-page';
import Products from './products';
import Explore from './explore';
import About from './about';
import JoinUs from './join-us';
import Basket from './basket';

class App extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          <Route exact path={'/'} component={LandingPage} />
          <Route exact path={'/products'} component={Products} />
          <Route exact path={'/explore'} component={Explore} />
          <Route exact path={'/about'} component={About} />
          <Route exact path={'/join-us'} component={JoinUs} />
          <Route exact path={'/my-cart'} component={Basket} />
        </div>
      </HashRouter>
    );
  }
}

export default App;
