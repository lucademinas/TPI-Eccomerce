import React from 'react';
import { Navbar, Nav, Button, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from "../../img/Logo-Diego.jpg";
import { useNavigate } from 'react-router-dom';

const CommonNavbar = () => {
  const navigate = useNavigate();
  return (
    <Navbar color="light"  variant="light" style={{borderBottom: '2px solid #504f4f'}}>
      <Container>
        <Navbar.Brand href="/">
          <img
            src={logo}
            alt="logo"
            width="50"
            height="50"
            className="d-inline-block align-top"
          />
        </Navbar.Brand>
        <Nav className="ml-auto">
          <Button onClick={() => navigate("/login")} variant="outline-secondary">Sign In</Button>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default CommonNavbar;
