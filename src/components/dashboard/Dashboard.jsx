import React, { useState } from 'react';
import { Container, Row, Col, Card, Button, Form } from 'react-bootstrap';
import './Dashboard.css'; // Incluye el archivo de estilo si es necesario.
import camiseta from "../../img/camiseta.jpg"

const Dashboard = () => {
  const [filter, setFilter] = useState({
    size: '',
    year: '',
    color: '',
    priceRange: [0, 100],
  });

  const products = [
    { id: 1, name: 'Independiente 1998', price: 24559, image: camiseta, color: 'red', year: 1998 },
    { id: 2, name: 'Newells 1993 Edicion D.A Maradona', price: 40000, image: camiseta, color: 'red', year: 1993 },
    { id: 3, name: 'Centenario 2017', price: 0, image: camiseta, color: 'blue', year: 2017 },
    { id: 4, name: 'Boca Jrs. 1995/96', price: 12574, image: camiseta, color: 'blue', year: 1995 },
    { id: 5, name: 'River Plate 1995/96', price: 10, image: camiseta, color: 'white', year: 1995 },
    { id: 6, name: 'Buzo Argentina 1994', price: 15000, image: camiseta, color: 'blue', year: 1994 },
  ];

  return (
    <Container fluid className="dashboard-container">
      <Row className="align-items-start justify-content-center">
        {/* Filtros */}
        <Col xs={12} md={3} className="filters-section">
          <div className="filters-container p-4 mb-4">
            <h5 className="text-center">Filtrar</h5>
            <Form>
              <Form.Group className="mb-3">
                <Form.Label>Año</Form.Label>
                <Form.Select value={filter.year} onChange={(e) => setFilter({ ...filter, year: e.target.value })}>
                  <option value="">Todos</option>
                  <option value="1994">1994</option>
                  <option value="1995">1995</option>
                  <option value="1996">1996</option>
                </Form.Select>
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Color</Form.Label>
                <Form.Select value={filter.color} onChange={(e) => setFilter({ ...filter, color: e.target.value })}>
                  <option value="">Todos</option>
                  <option value="red">Rojo</option>
                  <option value="blue">Azul</option>
                  <option value="green">Verde</option>
                </Form.Select>
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Precio</Form.Label>
                <Form.Range
                  min="0"
                  max="100"
                  value={filter.priceRange[1]}
                  onChange={(e) => setFilter({ ...filter, priceRange: [0, e.target.value] })}
                />
                <span>Precio: $0 - ${filter.priceRange[1]}</span>
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Tamaño</Form.Label>
                <Form.Select value={filter.size} onChange={(e) => setFilter({ ...filter, size: e.target.value })}>
                  <option value="">Todos</option>
                  <option value="S">S</option>
                  <option value="M">M</option>
                  <option value="L">L</option>
                  <option value="XL">XL</option>
                </Form.Select>
              </Form.Group>
            </Form>
          </div>
        </Col>

        {/* Productos */}
        <Col xs={12} md={9}>
          <Row className="mb-3 justify-content-end">
            <Col xs={12} md={6} className="d-flex justify-content-between">
              <Form.Control type="text" placeholder="Buscar" className="w-75" />
              <Button variant="dark">Nuevo</Button>
            </Col>
          </Row>

          <Row>
            {products.map((product) => (
              <Col xs={12} md={4} className="mb-4" key={product.id}>
                <Card className="product-card">
                  <Card.Img variant="top" src={product.image} alt={product.name} className="product-img" />
                  <Card.Body className="text-center">
                    <Card.Title>{product.name}</Card.Title>
                    <Card.Text>${product.price}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default Dashboard;
