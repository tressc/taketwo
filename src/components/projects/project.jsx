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
import pictagram from '../../assets/picta.png';
import dungeon from '../../assets/dungeon.png';

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
      portal: portal,
      dungeon: dungeon,
      pictagram: pictagram,
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
    let title = null;
    if (this.props.title !== undefined) {
      title = <div className="proj-title">{ this.props.title }</div>
    }
    let technologies = null;
    if (this.props.technologies !== undefined) {
      technologies = <div className="proj-technologies">{ this.props.technologies }</div>
    }
    let links = null;
    if (this.props.links !== undefined) {
      links = Object.keys(this.props.links).map((linktype, i) => {
        return (
        <a key={ i } href={ this.props.links[linktype] }>{ linktype }</a>
        )
      })
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

              <div className="title-techs">
                { title }
                { technologies }
              </div>

              <div className="proj-links">
                { links }
              </div>
              
              { description }
              { snippet }
            </div>
          </div>
      </div>
    )
  }
}

export default Project;
