import React from 'react';
import Navigation from '../nav/navigation.jsx';
import * as Scroll from 'react-scroll';
import P5Wrapper from 'react-p5-wrapper';
import sketch from './sketch.js';
// import Dec172018 from './posts/12172018.jsx';
// import ReactHtmlParser from 'react-html-parser';

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

  scrollToTop(duration = 500) {
    return () => {
      scroll.scrollToTop({
        duration: duration,
        smooth: 'easeInOutQuad'
      });
    }
  }

  render() {
    let links = this.props.blogs.map((post, i) => {
      let offset = -50;
      let text = String(post.date);
      // shouldn't need this if all dates are same format!
      if (text.length > 7) {
        text = text.slice(0, 7) + '...';
      }
      if (i === 0) {
        return (
          <span className="blog-link" key={ i } onClick={this.scrollToTop()}>{ text }</span>
        )
      }
      return (
        <Link className="blog-link" key={ i } activeClass="active" to={ String(post.date) } spy={true} smooth={true} offset={ offset } duration={500}>
          { text }
        </Link>
      );
    })
    let posts = this.props.blogs.map((post, i) => {
      let className = "post";
      let body = post.body
      if (i === 0) {
        className = "first-post"
      }
      return (
        <Element key={ i } className={ className } name={ String(post.date)}>
          <h2>{ post.title }</h2>
          <div dangerouslySetInnerHTML={{__html: post.body }}></div>
        </Element>
        );
    })
    return (
      <div className="blog main-page">
        <Navigation />
          <div className="sub-nav">
            <div className="index">
              <div>
                { links }
              </div>
              <span className="blog-link" onClick={this.scrollToTop(1500)}>To the top!</span>
            </div>
            <div className="entries">
              <div className="posts">
                { posts }
                <P5Wrapper sketch={ sketch }></P5Wrapper>
              </div>
            </div>
          </div>
      </div>
    );
  }
}

export default Blog;
