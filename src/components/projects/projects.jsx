import React from 'react';
import Navigation from '../nav/navigation.jsx';

class Projects extends  React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="projects main-page">
        <Navigation />
          <div className="sub-nav">
            here are my projects
          </div>
      </div>
    );
  }
}

export default Projects;
