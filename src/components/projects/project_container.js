import { connect } from 'react-redux';
import Project from './project.jsx';

const msp = (state, ownProps) => {
  var id = ownProps.match.params.id;
  var snippet;
  var title;
  var technologies;
  var description;
  var ruby;
  var links;
  for (var i = 0; i < state.projects.length; i++) {
    if (state.projects[i].id === id) {
      snippet = state.projects[i].snippet;
      description = state.projects[i].description;
      title = state.projects[i].title;
      technologies = state.projects[i].technologies;
      links = state.projects[i].links;
      ruby = state.projects[i].ruby;
    }

  }
  return {
    id,
    snippet,
    description,
    technologies,
    title,
    links,
    ruby
  };
};

const mdp = (dispatch) => {
  return {};
};

export default connect(msp, mdp)(Project);
