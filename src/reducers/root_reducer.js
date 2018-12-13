import { combineReducers } from 'redux';
import uiReducer from './ui_reducer.js';
import blogsReducer from './blogs_reducer.js';

const rootReducer = combineReducers({
  blogs: blogsReducer,
  ui: uiReducer
});

export default rootReducer;
