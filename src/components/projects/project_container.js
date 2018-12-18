import { connect } from 'react-redux';
import Project from './project.jsx';

const msp = (state, ownProps) => {
  return {
    id: ownProps.match.params.id
  };
};

const mdp = (dispatch) => {
  return {};
};

export default connect(msp, mdp)(Project);
