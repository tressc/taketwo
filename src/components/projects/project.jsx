import React from 'react';
import Navigation from '../nav/navigation.jsx';
import { Link } from 'react-router-dom';
import P5Wrapper from '../p5wrapper.jsx';
import paper from './paper.js';
import sketch from './sketch2.js';

class Project extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    // have a conditional check to see if we render the p5wrapper at all
    var processing;
    if (Number(this.props.id) % 2 === 0) { // this will be based on actual props
      processing = sketch;
    } else {
      processing = paper;
    }
    return (
      <div className="project main-page">
        <Navigation />
          <div className="sub-nav">
            <div className="index">
              <Link to={`/projects`}>back to projects</Link>
            </div>
            <div className="entries">
              <P5Wrapper sketch={ processing }></P5Wrapper>
            </div>
          </div>
      </div>
    )
  }
}

export default Project;
