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
        here's the about page
      </div>
    );
  }
}

export default About;
