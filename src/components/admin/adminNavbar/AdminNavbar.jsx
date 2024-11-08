// src/components/AdminNavbar.js
import React from 'react';
import { Navbar, Nav, Container, Dropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from "../../../assets/Logo-Diego.jpg";
import { useNavigate } from 'react-router-dom';
import Dashboard from '../../client/dashboard/Dashboard';
const AdminNavbar = () => {

  const navigate=useNavigate()

  const handlerDashboard=()=>{
    navigate("/")
  }
  const handlerOrderList=()=>{
    navigate("/order-list")
  }
  const handlerClientList=()=>{
    navigate("/client-list")
  }
  const logOut=()=>{
    localStorage.removeItem('Ecommerce-token')
    navigate("/login")
   
  }
    return (
    <Navbar bg="light" variant="light" style={{ borderBottom: '2px solid #504f4f' }}>
      <Container>
        {/* Logo en el lado izquierdo */}
        <Navbar.Brand href="#home">
          <img
            src={logo}
            alt="logo"
            width="50"
            height="50"
            className="d-inline-block align-top"
          />
        </Navbar.Brand>
        
        {/* Título y Breadcrumb */}
        <div>
          <h4 className="mb-0">Dashboard</h4>
          <p style={{ fontSize: 'small', color: 'gray' }}>Home &gt; Dashboard</p>
        </div>

        {/* Dropdown de Admin en el lado derecho */}
        <Nav className="ms-auto">
          <Dropdown>
            <Dropdown.Toggle variant="outline-secondary" id="dropdown-basic">
              ADMIN
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item onClick={handlerDashboard}>DASHBOARD</Dropdown.Item>
              <Dropdown.Item onClick={handlerOrderList}>LISTA DE PEDIDOS</Dropdown.Item>
              <Dropdown.Item onClick={handlerClientList}>LISTA DE CLIENTES</Dropdown.Item>
              <Dropdown.Item onClick={logOut}>LOG OUT</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default AdminNavbar;
