import React from 'react';
import Navigation from '../nav/navigation.jsx';
import placeholder from '../../assets/placeholder.png';
import { Link } from 'react-router-dom';

class Projects extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    // these will be dynamically generated

    // resize images proportionally
    // either with a black background OR expand shortest edge to 100% and then
    // center longer edge within frame (translate 50% overflow hidden etc...)

    // let tempImg = new Image();
    // tempImg.src = article.img_url;
    // let imgClass;
    //
    // if (tempImg.height > tempImg.width) {
    //   imgClass = "tall";
    // } else {
    //   imgClass = "wide";
    // }
    return (
      <div className="projects main-page">
        <Navigation />
          <div className="sub-nav">
            <ul>
              <li className="project">
                <Link to={`/projects/1`}>
                  <img alt="asdasd" className="project-img" src={ placeholder}></img>
                </Link>
              </li>
              <li className="project">
                <Link to={`/projects/2`}>
                  <img alt="asdasd" className="project-img" src={ placeholder}></img>
                </Link>
              </li>
              <li className="project">
                <Link to={`/projects/3`}>
                  <img alt="asdasd" className="project-img" src={ placeholder}></img>
                </Link>
              </li>
              <li className="project">
                <Link to={`/projects/4`}>
                  <img alt="asdasd" className="project-img" src={ placeholder}></img>
                </Link>
              </li>
              <li className="project">
                <Link to={`/projects/5`}>
                  <img alt="asdasd" className="project-img" src={ placeholder}></img>
                </Link>
              </li>
              <li className="project">
                <Link to={`/projects/6`}>
                  <img alt="asdasd" className="project-img" src={ placeholder}></img>
                </Link>
              </li>
              <li className="project">
                <Link to={`/projects/7`}>
                  <img alt="asdasd" className="project-img" src={ placeholder}></img>
                </Link>
              </li>
              <li className="project">
                <Link to={`/projects/8`}>
                  <img alt="asdasd" className="project-img" src={ placeholder}></img>
                </Link>
              </li>
            </ul>
          </div>
      </div>
    );
  }
}

export default Projects;
