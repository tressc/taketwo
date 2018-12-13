import { connect } from 'react-redux';
import Blog from './blog.jsx';

const msp = (state) => {
  // const media_filter = state.ui.media_filter;
  // const articles = state.content.articles[media_filter];
  const blogs = state.blogs;
  return {
    blogs
  };
};

const mdp = (dispatch) => {
  return {};
};

export default connect(msp, mdp)(Blog);
