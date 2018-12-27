import React from 'react';
import './stylesheets/App.sass';
import Projects from './components/projects/projects_container.js';
import Project from './components/projects/project_container.js';
import Blog from './components/blog/blog_container.js';
import About from './components/about/about.jsx';
import { Route } from 'react-router-dom';
// <Route exact path="/projects" component={ Projects } />
// <Route exact path="/" render={(props) => { return <Redirect to="/projects" /> }} />

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Route exact path="/" component={ Projects } />
        <Route exact path="/about" component={ About } />
        <Route exact path={`/:id`} component={ Project } />
        <Route exact path="/blog" component={ Blog } />
      </div>
    );
  }
}

export default App;
