// out of the box
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import * as serviceWorker from './serviceWorker';

// added by me
import Root from './components/root.jsx';
import configureStore from './store/store.js';
import preloadedState from './store/preloaded_state.js';
import ReactGA from 'react-ga';


document.addEventListener("DOMContentLoaded", () => {
  ReactGA.initialize('UA-131463962-1');
  ReactGA.pageview('/projects');


  const root = document.getElementById('root');
  const store = configureStore(preloadedState);
  ReactDOM.render(<Root store={ store } />, root);
});

// ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
