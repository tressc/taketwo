import React from 'react';
import Navigation from '../nav/navigation.jsx';
import * as Scroll from 'react-scroll';

let Link       = Scroll.Link;
let Element    = Scroll.Element;
let Events     = Scroll.Events;
let scroll     = Scroll.animateScroll;
let scrollSpy  = Scroll.scrollSpy;

class Blog extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  componentDidMount() {
    scrollSpy.update();
  }

  scrollToTop() {
    scroll.scrollToTop({
      duration: 1500,
      smooth: 'easeInOutQuad'
    });
  }

  render() {
    return (
      <div className="blog main-page">
        <Navigation />
        <div className="index">
          <div>
            <Link activeClass="active" to="test1" spy={true} smooth={true} offset={-50} duration={500}>
              Test one
            </Link>
            <Link activeClass="active" to="test2" spy={true} smooth={true} offset={-50} duration={500} >
              Test two
            </Link>
            <Link className="active" to="test3" spy={true} smooth={true} offset={-50} duration={500}>
              Test three
            </Link>
          </div>
          <a onClick={this.scrollToTop}>To the top!</a>
        </div>
        <div className="entries">
          <div className="posts">
            <Element name="test1" className="element">
              test 1
            </Element>

            <Element name="test2" className="element">
              test 2
            </Element>

            <Element name="test3" className="element">
              test 3
            </Element>
          </div>
        </div>
      </div>
    );
  }
}

export default Blog;
