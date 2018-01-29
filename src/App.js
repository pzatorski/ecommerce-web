import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import LandingPage from './landing-page';
import Basket from './basket';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path={'/'} component={LandingPage} />
          <Route exact path={'/basket'} component={Basket} />
        </div>
      </Router>
    );
  }
}

export default App;
