import React from 'react';

import Header from './Header';
import Menu from '../components/Menu';

class LandingPage extends React.Component {
  render() {
    return (
      <div>
        <Menu />
        <Header />
      </div>
    );
  }
}

export default LandingPage;
