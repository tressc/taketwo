import React from 'react';
import Navigation from '../nav/navigation.jsx';
import * as Scroll from 'react-scroll';
import P5Wrapper from 'react-p5-wrapper';
import sketch from './sketch.js';


let Link       = Scroll.Link;
let Element    = Scroll.Element;
// let Events     = Scroll.Events;
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
    let posts = this.props.blogs.map((post, i) => {
      return (
        <Element key={ i } name={ String(post.date) }>
          <h2>{ post.title }</h2>
          { post.body }
        </Element>
        );
    })
    let links = this.props.blogs.map((post, i) => {
      return (
        <Link key={ i } activeClass="active" to={ String(post.date) } spy={true} smooth={true} offset={-50} duration={500}>
          { post.date }
        </Link>
        );
    })
    return (
      <div className="blog main-page">
        <Navigation />
        <div className="index">
          <div>
            { links }
          </div>
          <span onClick={this.scrollToTop}>To the top!</span>
        </div>
        <div className="entries">
          <div className="posts">
            { posts }
            <P5Wrapper sketch={ sketch } />
          </div>
        </div>
      </div>
    );
  }
}

export default Blog;
