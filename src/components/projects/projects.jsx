import React from 'react';
import Navigation from '../nav/navigation.jsx';
// import tiles from '../../assets/placeholder.png';
import mergesort from '../../assets/mergesort.png';
import cylinder from '../../assets/cylinder.png';
import boxes from '../../assets/boxes.png';
import { Link } from 'react-router-dom';

class Projects extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.images = {
      mergesort: mergesort,
      cylinder: cylinder,
      boxes: boxes
    };
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
    let projects;
    projects = this.props.projects.map((project, i) => {
      return (
        <li key={i} className="project">
          <Link to={`/projects/${project.id}`}>
            <img alt={ project.id } className="project-img" src={ this.images[project.id] }></img>
          </Link>
        </li>
      )
    })
    return (
      <div className="projects main-page">
        <Navigation />
          <div className="sub-nav">
            <ul>
              { projects }
            </ul>
          </div>
      </div>
    );
  }
}

export default Projects;
