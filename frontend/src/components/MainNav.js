import React from "react";
import { Navbar, NavDropdown, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function MainNav(props) {
  return (
    <nav>
      <Navbar id="navbar" collapseOnSelect expand="lg" className="color-nav">
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>
            <NavDropdown title="Shop" id="collasible-nav-dropdown">
              <NavDropdown.Item as={Link} to="/shop/Accessories">
                Accessories
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/shop/Amplifiers">
                Amplifiers
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/shop/Guitars">
                Guitars
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/shop/Keyboards">
                Keyboard and Synths
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/shop/Pedals">
                Pedals and Effects
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to="/shop/">
                All
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link as={Link} to="/repairs">
              Repairs
            </Nav.Link>
            <Nav.Link as={Link} to="/consign">
              Sell/Consign/Trade
            </Nav.Link>
            <Nav.Link as={Link} to="/studio">
              Studio
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </nav>
  );
}
