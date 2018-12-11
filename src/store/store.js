import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import rootReducer from '../reducers/root_reducer';
import thunk from 'redux-thunk';

let middleWares = [logger, thunk];

if (process.env.NODE_ENV === 'production') {
  middleWares = [thunk];
}

const configureStore = (preloadedState = {}) => {
  return (
    createStore( rootReducer, preloadedState, applyMiddleware(...middleWares))
  );
};

export default configureStore;
