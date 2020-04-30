

import React from "react";
import { Navbar, NavDropdown, Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'



export default function MainNav(props) {
  const {setSelectedType} = props
return (
  <div>
    <Navbar collapseOnSelect expand="lg" bg="light" className="navbar transparent navbar-inverse">
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link as={Link} to="/">Home</Nav.Link>
          <Nav.Link  as={Link} to="/repairs">Repairs</Nav.Link>
          <Nav.Link  as={Link} to="/consign">Consign</Nav.Link>
          <Nav.Link  as={Link} to="/studio">Studio</Nav.Link>
          <NavDropdown title="Shop" id="collasible-nav-dropdown">
            <NavDropdown.Item  as={Link} to="/shop/accessories" onClick={()=>setSelectedType('Accessories')}>Accessories</NavDropdown.Item>
            <NavDropdown.Item  as={Link} to="/shop/amplifiers" onClick={()=>setSelectedType('Amplifiers')}>Amplifiers</NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/shop/guitars" onClick={()=>setSelectedType('Guitars')}>Guitars</NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/shop/keyboards" onClick={()=>setSelectedType('Keyboards and Synths')}>Keyboard and Synths</NavDropdown.Item>
            <NavDropdown.Item  as={Link} to="/shop/pedals" onClick={()=>setSelectedType('Pedals')}>Pedals</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item as={Link} to="/shop/">All</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
  </Navbar>
  </div>
)};