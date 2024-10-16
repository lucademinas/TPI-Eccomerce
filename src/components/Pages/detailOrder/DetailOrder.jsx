import React, { useState } from 'react';
import { Container, Row, Col, Button, Form, InputGroup, Card } from 'react-bootstrap';

const DetailOrder = () => {
  const [productos, setProductos] = useState([
    { id: 1, nombre: 'Argentina 1986', talla: 'L', cantidad: 1, precio: 110.99, imagen: 'url_a_imagen_1' },
    { id: 2, nombre: 'Argentina 1994', talla: 'S', cantidad: 1, precio: 259.99, imagen: 'url_a_imagen_2' },
    { id: 3, nombre: 'Argentina 2002', talla: 'XL', cantidad: 1, precio: 109.99, imagen: 'url_a_imagen_3' }
  ]);

  const [metodoPago, setMetodoPago] = useState('Tarjeta de crédito');
  const [nombreTitular, setNombreTitular] = useState('');
  const [numeroTarjeta, setNumeroTarjeta] = useState('');
  const [fechaVencimiento, setFechaVencimiento] = useState('');
  const [cvv, setCvv] = useState('');

  const handleCantidadChange = (id, valor) => {
    const nuevosProductos = productos.map(producto => {
      if (producto.id === id) {
        return { ...producto, cantidad: producto.cantidad + valor >= 1 ? producto.cantidad + valor : 1 };
      }
      return producto;
    });
    setProductos(nuevosProductos);
  };

  const calcularSubtotal = () => {
    return productos.reduce((total, producto) => total + producto.precio * producto.cantidad, 0).toFixed(2);
  };

  return (
    <Container className="mt-4"  style={{marginLeft:"60px",marginBottom: "10px"}}>
      <Row >
        {/* Card para el detalle de compra */}
        <Col md={8}>
          <Card>
            <Card.Header>
              <h4>Detalle de compra</h4>
            </Card.Header>
            <Card.Body>
              {productos.map(producto => (
                <Row key={producto.id} className="mb-3">
                  <Col xs={2}>
                    <img src={producto.imagen} alt={producto.nombre} style={{ width: '100%' }} />
                  </Col>
                  <Col xs={3}>
                    <p>{producto.nombre}</p>
                  </Col>
                  <Col xs={1}>
                    <Form.Control as="select" value={producto.talla} disabled style={{width: "50px"}}>
                      <option>{producto.talla}</option>
                    </Form.Control>
                  </Col>
                  <Col xs={3}>
                    <InputGroup>
                      <Button variant="outline-secondary" onClick={() => handleCantidadChange(producto.id, -1)}>-</Button>
                      <Form.Control type="text" value={producto.cantidad} readOnly className="text-center" style={{width: "30px"}} />
                      <Button variant="outline-secondary" onClick={() => handleCantidadChange(producto.id, 1)}>+</Button>
                    </InputGroup>
                  </Col>
                  <Col xs={2}>
                    <p>${producto.precio.toFixed(2)}</p>
                  </Col>
                  <Col xs={1}>
                    <Button variant="danger">X</Button>
                  </Col>
                </Row>
              ))}
              <Row className="mt-4">
                <Col xs={8}>
                  <h5>Subtotal: </h5>
                </Col>
                <Col xs={4}>
                  <h5>${calcularSubtotal()}</h5>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>

        {/* Card para el método de pago */}
        <Col md={4}>
          <Card>
            <Card.Header>
              <h4>Método de pago</h4>
            </Card.Header>
            <Card.Body>
              <Form>
                <Form.Group className="mb-3">
                  <Form.Check
                    type="radio"
                    label="Google Pay"
                    name="metodoPago"
                    id="google-pay"
                    value="Google Pay"
                    checked={metodoPago === 'Google Pay'}
                    onChange={(e) => setMetodoPago(e.target.value)}
                  />
                  <Form.Check
                    type="radio"
                    label="Tarjeta de crédito"
                    name="metodoPago"
                    id="tarjeta-credito"
                    value="Tarjeta de crédito"
                    checked={metodoPago === 'Tarjeta de crédito'}
                    onChange={(e) => setMetodoPago(e.target.value)}
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Nombre del titular</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Ingresa nombre del titular"
                    value={nombreTitular}
                    onChange={(e) => setNombreTitular(e.target.value)}
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Número de la tarjeta</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Ingresa número de la tarjeta"
                    value={numeroTarjeta}
                    onChange={(e) => setNumeroTarjeta(e.target.value)}
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Row>
                    <Col xs={7}>
                      <Form.Control
                        type="text"
                        placeholder="Fecha de vencimiento"
                        value={fechaVencimiento}
                        onChange={(e) => setFechaVencimiento(e.target.value)}
                      />
                    </Col>
                    <Col xs={5}>
                      <Form.Control
                        type="text"
                        placeholder="CVV"
                        value={cvv}
                        onChange={(e) => setCvv(e.target.value)}
                      />
                    </Col>
                  </Row>
                </Form.Group>

                <Button variant="dark" className="w-100">Pagar</Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default DetailOrder;
