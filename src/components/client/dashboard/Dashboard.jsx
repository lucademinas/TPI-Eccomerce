import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Card, Button, Form } from 'react-bootstrap';
import './Dashboard.css'; // Incluye el archivo de estilo si es necesario.
import { useNavigate } from 'react-router-dom';
import { API_BASE_URL } from '../../../api';

const Dashboard = () => {
  const [products, setProducts] = useState([]);
  const [filter, setFilter] = useState({
    year: '',
    color: '',
    priceRange: [0, 100],
    size: ''
  });

  const navigate = useNavigate();

  useEffect(() => {
    fetch(`${API_BASE_URL}/Product`, {
      headers: {
        accept: "application/json",
        "Authorization": `Bearer ${localStorage.getItem("Ecommerce-token")}`
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("La respuesta falló");
        }
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setProducts(data);
      })
      .catch((error) => console.error("Error fetching data", error));
  }, []);

  const handleProductClick = (product) => {
    navigate("/product-detail", {state: {product}})
  }

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
                <Form.Select
                  value={filter.year}
                  onChange={(e) => setFilter({ ...filter, year: e.target.value })}
                >
                  <option value="">Todos</option>
                  <option value="1994">1994</option>
                  <option value="1995">1995</option>
                  <option value="1996">1996</option>
                </Form.Select>
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Color</Form.Label>
                <Form.Select
                  value={filter.color}
                  onChange={(e) => setFilter({ ...filter, color: e.target.value })}
                >
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
                  onChange={(e) =>
                    setFilter({ ...filter, priceRange: [0, e.target.value] })
                  }
                />
                <span>Precio: $0 - ${filter.priceRange[1]}</span>
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Tamaño</Form.Label>
                <Form.Select
                  value={filter.size}
                  onChange={(e) => setFilter({ ...filter, size: e.target.value })}
                >
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
                <Card className="product-card" onClick={() => handleProductClick(product)}>
                  <Card.Img
                    variant="top"
                    src={product.imageUrl}
                    alt={product.description}
                    className="product-img"
                  />
                  <Card.Body className="text-center">
                    <Card.Title>{product.description}</Card.Title>
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
