import React from 'react';
import './header.css';
import {Navbar, Nav, NavDropdown, MenuItem} from 'react-bootstrap';
import {Icon} from 'react-fa';

export default class Header extends React.Component {
    render() {
        return (
            <Navbar inverse collapseOnSelect>
                <Navbar.Header>
                    <Navbar.Brand>
                        <a href=".">Home</a>
                    </Navbar.Brand>
                    <Navbar.Toggle/>
                </Navbar.Header>
                <Navbar.Collapse>
                  <Nav>
                      <NavDropdown eventKey={1} title="Projects" id="basic-nav-dropdown">
                          <MenuItem eventKey={1.1} href="http://austinwgerald.com/projects/ttt/index.html">Tic-Tac-Toe</MenuItem>
                          <MenuItem divider />
                          <MenuItem eventKey={1.2}  href="https://github.com/austinwgerald/awg">This site (meta)</MenuItem>
                      </NavDropdown>
                  </Nav>
                  <Nav pullRight>
                    <Navbar.Text >
                        <Navbar.Link href="https://github.com/austinwgerald" target="_blank">
                          <Icon size="2x" name="github" />
                        </Navbar.Link>
                    </Navbar.Text>
                    <Navbar.Text >
                        <Navbar.Link href="https://www.linkedin.com/in/austinwgerald" target="_blank">
                          <Icon size="2x" name="linkedin" />
                        </Navbar.Link>
                    </Navbar.Text>
                    <Navbar.Text >
                        <Navbar.Link href="https://twitter.com/austinwgerald" target="_blank">
                          <Icon size="2x" name="twitter" />
                        </Navbar.Link>
                    </Navbar.Text>
                    <Navbar.Text >
                        <Navbar.Link href="https://www.instagram.com/austinwgerald/" target="_blank">
                          <Icon size="2x" name="instagram" />
                        </Navbar.Link>
                    </Navbar.Text>
                  </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}
