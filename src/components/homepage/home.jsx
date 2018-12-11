import React from 'react';
import Navigation from '../nav/navigation.jsx';

class Home extends  React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="home-page">
        <Navigation />
        hello world
      </div>
    );
  }
}

export default Home;
