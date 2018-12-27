import { connect } from 'react-redux';
import Project from './project.jsx';

const msp = (state, ownProps) => {
  var id = ownProps.match.params.id;
  var snippet;
  var title;
  var technologies;
  var description;
  for (var i = 0; i < state.projects.length; i++) {
    if (state.projects[i].id === id) {
      snippet = state.projects[i].snippet;
      description = state.projects[i].description;
      title = state.projects[i].title;
      technologies = state.projects[i].technologies;
    }

  }
  return {
    id: id,
    snippet: snippet,
    description: description,
    technologies: technologies,
    title: title
  };
};

const mdp = (dispatch) => {
  return {};
};

export default connect(msp, mdp)(Project);
