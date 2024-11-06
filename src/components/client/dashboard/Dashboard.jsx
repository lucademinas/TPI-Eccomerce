import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Card, Button, Form } from 'react-bootstrap';
import './Dashboard.css';
import { useNavigate } from 'react-router-dom';
import { API_BASE_URL } from '../../../api';

const Dashboard = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [filter, setFilter] = useState({
    priceRange: [0, 100000],
    size: '',
    search: ''
  });

  const navigate = useNavigate();

  useEffect(() => {
    fetch(`${API_BASE_URL}/Product/GetAllProducts`, {
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
        setProducts(data);
        setFilteredProducts(data);
        const maxPrice = Math.max(...data.map(product => product.price));
        setFilter(prev => ({...prev, priceRange: [0, maxPrice]}));
      })
      .catch((error) => console.error("Error fetching data", error));
  }, []);

  const handleProductClick = (product) => {
    navigate("/product-detail", {state: {product}});
  }

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilter(prevFilter => ({
      ...prevFilter,
      [name]: value
    }));
  }

  // Función para comprobar si todas las palabras de búsqueda están en el texto
  const containsAllWords = (text, words) => {
    return words.every(word => 
      text.toLowerCase().includes(word.toLowerCase())
    );
  }

  // Efecto para filtrar productos
  useEffect(() => {
    let result = products;

    // Filtrar por precio
    result = result.filter(product => 
      product.price >= filter.priceRange[0] && 
      product.price <= filter.priceRange[1]
    );

    // Filtrar por talle si está seleccionado
    if (filter.size) {
      result = result.filter(product => product.size === filter.size);
    }

    // Filtrar por término de búsqueda
    if (filter.search) {
      const searchWords = filter.search.split(' ').filter(word => word.length > 0);
      result = result.filter(product => 
        containsAllWords(product.description, searchWords)
      );
    }

    setFilteredProducts(result);
  }, [filter, products]);

  return (
    <Container fluid className="dashboard-container">
      <Row className="align-items-start justify-content-center">
        {/* Filtros */}
        <Col xs={12} md={3} className="filters-section">
          <div className="filters-container p-4 mb-4">
            <h5 className="text-center">Filtrar</h5>
            <Form>
              {/* Búsqueda por descripción */}
              <Form.Group className="mb-3">
                <Form.Label>Buscar</Form.Label>
                <Form.Control
                  type="text"
                  name="search"
                  placeholder="Buscar producto..."
                  value={filter.search}
                  onChange={handleFilterChange}
                />
              </Form.Group>

              {/* Filtro de precio */}
              <Form.Group className="mb-3">
                <Form.Label>Precio máximo: ${filter.priceRange[1]}</Form.Label>
                <Form.Range
                  name="priceRange"
                  min="0"
                  max={Math.max(...products.map(product => product.price))}
                  value={filter.priceRange[1]}
                  onChange={(e) =>
                    setFilter(prev => ({ 
                      ...prev, 
                      priceRange: [0, parseInt(e.target.value)] 
                    }))
                  }
                />
              </Form.Group>

              {/* Filtro de talle */}
              <Form.Group className="mb-3">
                <Form.Label>Talle</Form.Label>
                <Form.Select
                  name="size"
                  value={filter.size}
                  onChange={handleFilterChange}
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
          <Row>
            {filteredProducts.map((product) => (
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