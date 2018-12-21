import { connect } from 'react-redux';
import Project from './project.jsx';

const msp = (state, ownProps) => {
  var id = ownProps.match.params.id;
  var snippet;
  var description;
  for (var i = 0; i < state.projects.length; i++) {
    if (state.projects[i].id === id) {
      snippet = state.projects[i].snippet;
    }
    if (state.projects[i].id === id) {
      description = state.projects[i].description;
    }
  }
  return {
    id: id,
    snippet: snippet,
    description: description
  };
};

const mdp = (dispatch) => {
  return {};
};

export default connect(msp, mdp)(Project);
