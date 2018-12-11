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
        here are my projects
      </div>
    );
  }
}

export default Projects;
