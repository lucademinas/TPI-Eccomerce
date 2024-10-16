import React from 'react';
import { Navbar, Nav, Button, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from "../../img/Logo-Diego.jpg";

const CommonNavbar = () => {
  return (
    <Navbar color="light"  variant="light" style={{borderBottom: '2px solid #504f4f'}}>
      <Container>
        <Navbar.Brand href="#home">
          <img
            src={logo}
            alt="logo"
            width="50"
            height="50"
            className="d-inline-block align-top"
          />
        </Navbar.Brand>
        <Nav className="ml-auto">
          {/* Botón de Sign In */}
          <Button variant="outline-secondary">Sign In</Button>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default CommonNavbar;
