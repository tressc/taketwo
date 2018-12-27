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
        <Navbar.Header>
          <Link to="/" href="/" className="logo">
            <span>t</span>
          </Link>
        </Navbar.Header>


        <Nav pullRight>
          <NavItem componentClass={Link} href="/" to="/">
            projects
          </NavItem>
          <NavItem componentClass={Link} href="/about" to="/about">
            about
          </NavItem>
        </Nav>
      </Navbar>
    );
  }
}

export default Navigation;
