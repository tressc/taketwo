import React from 'react';
import Navigation from '../nav/navigation.jsx';
import portrait from '../../assets/me.jpeg';
import resume from '../../assets/resume.pdf';
import { Link } from 'react-router-dom';

class About extends  React.Component {
  constructor() {
    super();
    this.state = {
      colors: [
        'red',
        'orange',
        'yellow',
        'green',
        'blue',
        'violet',
        'red'
      ],
      intervalId: null
    };
    this.rotateColors = this.rotateColors.bind(this);
  }

  rotateColors() {
    var colors = this.state.colors;
    colors.pop();
    colors.unshift(colors[colors.length - 1]);
    this.setState({ colors: colors });
  }

  componentDidMount() {
    var interval = window.setInterval(this.rotateColors, 100);
    this.setState({ intervalId: interval });
  }

  componentWillUnmount() {
    window.clearInterval(this.state.intervalId);
  }

  render() {
    let techs = [
      'React',
      'Redux',
      'JavaScript',
      'Rails',
      'Ruby',
      'Python',
      'Flask',
      'PostgreSQL',
      'jQuery',
      'AWS',
      'p5',
      'D3',
      'Firebase',
      'HTML5',
      'CSS3',
      'SCSS',
      'Git',
      'Bootstrap',
    ];
    let technologies = techs.map((tech, i) => {
      let row = Math.floor(i / 5);
      let column = i % 5;
      let color = this.state.colors[row + column];
      return <li className={color}>{techs[i]}</li>;
    })
    return (
      <div className="about main-page">
        <Navigation />
        <div className="sub-nav">

          <div className="left">
            <div className="row-one">
              <div>
                Hi! I'm Colin, a NYC-based software developer. You can check out my resume <a href={ resume } target="_blank">here</a>.
                <div className="space"/>
                View my <Link to="/projects" href="/projects">projects</Link>.
              </div>
            </div>

            <div className="row-two">
              <div>Technologies</div>
            </div>

            <div className="row-three">
              Contact
            </div>

            <div className="row-four">
              External
            </div>
          </div>

          <div className="right">
            <div className="row-one">
              <img src={ portrait } alt="me" className="portrait"></img>
            </div>

            <div className="row-two">
              <ul className="list">
                { technologies }
              </ul>
            </div>

            <div className="row-three">
              <ul className="contact">
                <li><a className="email" href="mailto:treescd@gmail.com">treescd@gmail.com</a></li>
                <li>860.331.0394</li>
              </ul>
            </div>


            <div className="row-four">
              <ul className="contact">
                <li><a className="email" href="https://github.com/tressc">Github</a></li>
                <li><a className="email" href="https://www.linkedin.com/in/tressc/">LinkedIn</a></li>
              </ul>
            </div>
          </div>

        </div>
      </div>
    );
  }
}

export default About;
