import React, { useEffect, useState } from 'react';
import { Navbar, Nav, Button, Container, Dropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from "../../../assets/Logo-Diego.jpg";
import { FaShoppingCart } from 'react-icons/fa'; // Importando el icono del carrito
import { useNavigate } from 'react-router-dom';

const ClientNavbar = () => {

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
    <Navbar bg="light" variant="light" style={{ borderBottom: '2px solid #504f4f' }}>
      <Container>
        <Navbar.Brand onClick={() => navigate("/")}>
          <img
            src={logo}
            alt="logo"
            width="50"
            height="50"
            className="d-inline-block align-top"
          />
        </Navbar.Brand>
        <Nav className="ml-auto">
          {/* Icono de carrito */}
          <Button variant="outline-secondary" className="me-2">
            <FaShoppingCart />
          </Button>
          {/* Dropdown para el usuario */}
          {isAuth ? (
            <Dropdown>
              <Dropdown.Toggle variant="outline-secondary" id="dropdown-basic">
                User
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item onClick={() => navigate("/")}>Inicio</Dropdown.Item>
                <Dropdown.Item onClick={() => navigate("/detail-order")}>Carrito</Dropdown.Item>
                <Dropdown.Item >Historial de pedidos</Dropdown.Item>
                <Dropdown.Item onClick={handleSignOut}>Cerrar Sesion</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          ) : (
            <Button onClick={handleSignIn} variant="outline-secondary">Sign In</Button>
          )}

        </Nav>
      </Container>
    </Navbar>
  );
};

export default ClientNavbar;
