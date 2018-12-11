import { combineReducers } from 'redux';
import uiReducer from './ui_reducer.js';

const rootReducer = combineReducers({
  ui: uiReducer
});

export default rootReducer;
