import { connect } from 'react-redux';
import Projects from './projects.jsx';

const msp = (state) => {
  return {
    projects: state.projects
  };
};

const mdp = (dispatch) => {
  return {};
};

export default connect(msp, mdp)(Projects);
