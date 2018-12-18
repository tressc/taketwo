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
    console.log(this.props);
    return (
      <div className="project main-page">
        <Navigation />
          <div className="sub-nav">
            <div className="index">
              <Link to={`/projects`}>back to projects</Link>
            </div>
            <div className="entries">
              <P5Wrapper sketch={ paper }></P5Wrapper>
            </div>
          </div>
      </div>
    )
  }
}

export default Project;
