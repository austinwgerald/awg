import React from 'react';
import './header.css';
import {Navbar, Nav, NavItem, NavDropdown, MenuItem} from 'react-bootstrap';
import {Icon} from 'react-fa';

export default class Header extends React.Component {

  render() {
    return (
      <Navbar inverse collapseOnSelect>
          <Navbar.Header>
              <Navbar.Brand>
                  <a href="#">Home</a>
              </Navbar.Brand>
              <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
              <Nav>
                  <NavItem eventKey={1} href="#">Link</NavItem>
                  <NavItem eventKey={2} href="#">Link</NavItem>
                  <NavDropdown eventKey={3} title="Projects" id="basic-nav-dropdown">
                      <MenuItem eventKey={3.1}>Tic-Tac-Toe</MenuItem>
                      <MenuItem divider />
                      <MenuItem eventKey={3.2}>This site (meta)</MenuItem>
                  </NavDropdown>
              </Nav>
              <Nav pullRight>
                  <NavItem eventKey={1} href="#">
                    <Icon size="2x" name="github" />
                  </NavItem>
                  <NavItem eventKey={2} href="#">
                    <Icon size="2x" name="linkedin" />
                  </NavItem>
                  <NavItem eventKey={3} href="#">
                    <Icon size="2x" name="twitter" />
                  </NavItem>
                  <NavItem eventKey={4} href="#">
                    <Icon size="2x" name="instagram" />
                  </NavItem>
              </Nav>
          </Navbar.Collapse>
      </Navbar>
    );
  }
}
