import React from 'react';
import './stylesheets/App.sass';
import Projects from './components/projects/projects_container.js';
import Project from './components/projects/project_container.js';
import Blog from './components/blog/blog_container.js';
import About from './components/about/about.jsx';
import { Switch, Route, Redirect } from 'react-router-dom';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" render={(props) => { return <Redirect to="/about" /> }} />
          <Route exact path="/projects" component={ Projects } />
          <Route exact path={`/projects/:id`} component={ Project } />
          <Route exact path="/blog" component={ Blog } />
          <Route exact path="/about" component={ About } />
        </Switch>
      </div>
    );
  }
}

export default App;
