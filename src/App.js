import React from 'react';
import './stylesheets/App.sass';
import Home from './components/homepage/home.jsx';
import Projects from './components/projects/projects.jsx';
import Project from './components/projects/project_container.js';
import Blog from './components/blog/blog_container.js';
import About from './components/about/about.jsx';
import { Route } from 'react-router-dom';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Route exact path="/" component={ Home } />
        <Route exact path="/projects" component={ Projects } />
        <Route exact path={`/projects/:id`} component={ Project } />
        <Route exact path="/blog" component={ Blog } />
        <Route exact path="/about" component={ About } />
      </div>
    );
  }
}

export default App;
