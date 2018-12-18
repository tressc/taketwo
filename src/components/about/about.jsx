import React from 'react';
import Navigation from '../nav/navigation.jsx';

class About extends  React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="about main-page">
        <Navigation />
        <div className="sub-nav">
          here's the about page
        </div>
      </div>
    );
  }
}

export default About;
