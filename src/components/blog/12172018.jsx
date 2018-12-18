import React from 'react';
import P5Wrapper from 'react-p5-wrapper';
import sketch from './p5/sketch.js';

class Dec172018 extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div>
        Hello world
        <P5Wrapper sketch={ sketch } />
      </div>
    )
  }
}

export default Dec172018;
