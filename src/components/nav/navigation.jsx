import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, NavItem } from 'react-bootstrap';

class Navigation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Navbar fluid className="navigation">
        <Nav pullRight>
          <NavItem componentClass={Link} href="/" to="/">
            Home
          </NavItem>
          <NavItem componentClass={Link} href="/projects" to="/projects">
            Projects
          </NavItem>
          <NavItem componentClass={Link} href="/blog" to="/blog">
            Blog
          </NavItem>
          <NavItem componentClass={Link} href="/about" to="/about">
            About
          </NavItem>
        </Nav>
      </Navbar>
    );
  }
}

export default Navigation;
