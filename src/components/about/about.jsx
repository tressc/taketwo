import React from 'react';
import Navigation from '../nav/navigation.jsx';
import portrait from '../../assets/meline.png';

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
          <img src={ portrait } alt="me" className="portrait"></img>
        </div>
      </div>
    );
  }
}

export default About;
