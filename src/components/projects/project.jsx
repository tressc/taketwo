import React from 'react';
import Navigation from '../nav/navigation.jsx';
import { Link } from 'react-router-dom';
import P5Wrapper from '../p5wrapper.jsx';
import tiles from './animations/tiles.js';
import mergesort from './animations/mergesort.js';
import cylinder from './animations/cylinders2.js';
import boxes from './animations/boxes.js';

class Project extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.animations = {
      tiles: tiles,
      mergesort: mergesort,
      cylinder: cylinder,
      boxes: boxes,
    }
  }

  render() {
    // have a conditional check to see if we render the p5wrapper at all
    let animation = null;
    if (this.animations[this.props.id]) { // this will be based on actual props
      animation = <P5Wrapper sketch={ this.animations[this.props.id] }></P5Wrapper>;
    }
    return (
      <div className="project main-page">
        <Navigation />
          <div className="sub-nav">
            <div className="index">
              <Link to={`/projects`}>back to projects</Link>
            </div>
            <div className="entries">
              { animation }
            </div>
          </div>
      </div>
    )
  }
}

export default Project;
