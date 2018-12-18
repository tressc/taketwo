import React from 'react';
import Navigation from '../nav/navigation.jsx';

class Home extends  React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="home-page main-page">
        <Navigation />
          <div className="sub-nav">
            here's the home page
          </div>
      </div>
    );
  }
}

export default Home;
