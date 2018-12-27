import React from 'react';
import Navigation from '../nav/navigation.jsx';
import portrait from '../../assets/me.jpeg';
import resume from '../../assets/resume.pdf';

class About extends  React.Component {
  constructor() {
    super();
    this.state = {};
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
    let colors = [
      'red',
      'orange',
      'yellow',
      'green',
      'blue',
      'violet',
      'red'
    ];
    let technologies = techs.map((tech, i) => {
      let row = Math.floor(i / 5);
      let column = i % 5;
      let color = colors[row + column];
      return <li className={color}>{techs[i]}</li>;
    })
    return (
      <div className="about main-page">
        <Navigation />
        <div className="sub-nav">

          <div className="left">
            <div className="row-one">
              <div>
                I'm Colin, a NYC-based software developer. You can download my resume <a href={ resume } download>here</a>.
              </div>
            </div>

            <div className="row-two">
              <div>Technologies</div>
            </div>

            <div className="row-three">
              Contact
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
                <li>treescd@gmail.com</li>
                <li>860.331.0394</li>
              </ul>
            </div>
          </div>

        </div>
      </div>
    );
  }
}

export default About;
