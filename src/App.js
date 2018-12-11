import React from 'react';
import './stylesheets/App.sass';
import Home from './components/homepage/home.jsx';
import Projects from './components/projects/projects.jsx';
import Blog from './components/blog/blog.jsx';
import About from './components/about/about.jsx';
import { Route } from 'react-router-dom';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Route exact path="/" component={ Home } />
        <Route exact path="/projects" component={ Projects } />
        <Route exact path="/blog" component={ Blog } />
        <Route exact path="/about" component={ About } />
      </div>
    );
  }
}

export default App;
