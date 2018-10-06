import React from 'react';
// import { NavLink } from 'react-router-dom';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';

export default class NavBar extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <Navbar color="light" id="navbarColor" light expand="md">
          <NavbarBrand href="/" className="logo">Disaster Management</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/response" className="logo">Response</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/map" className="logo">Map</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/howto" className="logo">How To</NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar className="logo">
                <DropdownToggle nav caret color="white">
                  Account
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    test 1
                  </DropdownItem>
                  <DropdownItem>
                    test 2
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                    Reset
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
