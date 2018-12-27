import React from 'react';
import Navigation from '../nav/navigation.jsx';
import { Link } from 'react-router-dom';
import P5Wrapper from '../p5wrapper.jsx';
import Highlight from 'react-highlight'


import tiles from './animations/tiles.js';
import mergesort from './animations/mergesort.js';
import cylinder from './animations/cylinders2.js';
import boxes from './animations/boxes.js';

import demo from '../../assets/demo.png';
import homepage from '../../assets/homepage.png';
import portal from '../../assets/portalfull.png';

class Project extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.animations = {
      tiles: tiles,
      mergesort: mergesort,
      cylinder: cylinder,
      boxes: boxes,
    };
    this.staticImages = {
      demo: demo,
      redroute: homepage,
      portal: portal
    };
  }

  render() {
    // have a conditional check to see if we render the p5wrapper at all
    let snippet = null;
    if (this.props.snippet) {
      snippet = (
        <Highlight language='javascript'>
            { this.props.snippet }
        </Highlight>
      )
    }
    let animation = null;
    if (this.animations[this.props.id] !== undefined) { // this will be based on actual props
      animation = <P5Wrapper sketch={ this.animations[this.props.id] }></P5Wrapper>;
    }
    let staticImage = null;
    if (this.staticImages[this.props.id] !== undefined) { // this will be based on actual props
      staticImage = <img  className="static-image" alt={ this.staticImages[this.props.id] } src={ this.staticImages[this.props.id] }></img>;
    }
    let description = null;
    if (this.props.description !== undefined) {
      description = <div className="proj-description">{ this.props.description }</div>
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
              { staticImage }
              { description }
              { snippet }
            </div>
          </div>
      </div>
    )
  }
}

export default Project;
