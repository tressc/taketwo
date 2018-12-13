// import { merge } from 'lodash';

const blogsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    default:
      return state;
  }
}

export default blogsReducer;
