import React, { useEffect, useState } from 'react';
import { Navbar, Nav, Button, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from "../../../assets/Logo-Diego.jpg";
import { useNavigate } from 'react-router-dom';

const CommonNavbar = () => {
  const [isAuth, setIsAuth] = useState(false)

  useEffect(() => {
    const token = localStorage.getItem("Ecommerce-token")
    if (token) {
      setIsAuth(true)
    }
  }, [])

  const handleSignIn = () => {
    navigate("/login")
  }

  const handleSignOut = () => {
    localStorage.removeItem("Ecommerce-token")
    setIsAuth(false)
    navigate("/login")
  }
  const navigate = useNavigate();
  return (
    <Navbar color="light" variant="light" style={{ borderBottom: '2px solid #504f4f' }}>
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
          {isAuth ? (
            <Button onClick= {handleSignOut} variant="outline-secondary">Sign Out</Button>
          ) : (
            <Button onClick={handleSignIn} variant="outline-secondary">Sign In</Button>
          )}

        </Nav>
      </Container>
    </Navbar>
  );
}

export default CommonNavbar;
