import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav } from 'react-bootstrap';

const CustomNavbar = () => {
    return (
      <Navbar expand="lg" className="my-custom-navbar">
        {/* <Navbar.Brand href="#home">Navbar</Navbar.Brand> */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" >
          <Nav className="nav mr-auto">
            <Nav.Link href="#home"><b>Home</b></Nav.Link>
            <Nav.Link href="#about"><b>About</b></Nav.Link>
            <Nav.Link href="#skills"><b>Skills</b></Nav.Link>
            <Nav.Link href="#projects"><b>Projects</b></Nav.Link>
            <Nav.Link href="#contact"><b>Contact</b></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  };
  
  export default CustomNavbar;