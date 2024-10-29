import React from 'react';
import { Navbar, Nav, Button, Container, Dropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from "../../../img/Logo-Diego.jpg";
import { FaShoppingCart } from 'react-icons/fa'; // Importando el icono del carrito

const ClientNavbar = () => {
  return (
    <Navbar bg="light" variant="light" style={{ borderBottom: '2px solid #504f4f' }}>
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
          {/* Icono de carrito */}
          <Button variant="outline-secondary" className="me-2">
            <FaShoppingCart />
          </Button>
          {/* Dropdown para el usuario */}
          <Dropdown>
            <Dropdown.Toggle variant="outline-secondary" id="dropdown-basic">
              User
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">Usuario</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Carrito</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Historial de pedidos</Dropdown.Item>
              <Dropdown.Item href="#/action-4">Cerrar Sesion</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default ClientNavbar;
