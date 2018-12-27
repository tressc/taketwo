import React from 'react';
import { Provider } from 'react-redux';
import { HashRouter as Router } from 'react-router-dom';
import ScrollToTop from './scroll_to_top.js';
import App from '../App.js';

const Root = ({ store }) => {
  return (
    <Provider store={ store }>
      <Router>
        <ScrollToTop>
          <App />
        </ScrollToTop>
      </Router>
    </Provider>
  );
};

export default Root;
