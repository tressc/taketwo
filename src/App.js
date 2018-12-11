import React from 'react';
import './stylesheets/App.sass';
import Home from './components/homepage/home.jsx';
import { Route } from 'react-router-dom';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Route exact path="/" component={ Home } />
      </div>
    );
  }
}

export default App;
