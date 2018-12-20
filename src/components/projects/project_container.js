import { connect } from 'react-redux';
import Project from './project.jsx';

const msp = (state, ownProps) => {
  var id = ownProps.match.params.id;
  var snippet;
  for (var i = 0; i < state.projects.length; i++) {
    if (state.projects[i].id === id) {
      snippet = state.projects[i].snippet;
    }
  }
  return {
    id: id,
    snippet: snippet
  };
};

const mdp = (dispatch) => {
  return {};
};

export default connect(msp, mdp)(Project);
