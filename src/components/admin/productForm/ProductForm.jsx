import React from 'react';
import { Form, Button, Row, Col, InputGroup } from 'react-bootstrap';

const ProductForm = () => {
  return (
    <Form className="p-4 border rounded">
      <Row>
        <Col md={6}>
          <Form.Group controlId="productName" className="mb-3">
            <Form.Label>Nombre de producto</Form.Label>
            <Form.Control type="text" placeholder="Lorem Ipsum" />
          </Form.Group>

          <Form.Group controlId="description" className="mb-3">
            <Form.Label>Descripción</Form.Label>
            <Form.Control as="textarea" placeholder="Lorem Ipsum" rows={3} />
          </Form.Group>

          <Form.Group controlId="category" className="mb-3">
            <Form.Label>Categoría</Form.Label>
            <Form.Control type="text" placeholder="Sneaker" />
          </Form.Group>

          <Form.Group controlId="brand" className="mb-3">
            <Form.Label>Marca</Form.Label>
            <Form.Control type="text" placeholder="Adidas" />
          </Form.Group>

          <Row>
            <Col>
              <Form.Group controlId="productId" className="mb-3">
                <Form.Label>ID</Form.Label>
                <Form.Control type="text" placeholder="#32A5A3" />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group controlId="stockQuantity" className="mb-3">
                <Form.Label>Cantidad Stock</Form.Label>
                <Form.Control type="number" placeholder="211" />
              </Form.Group>
            </Col>
          </Row>

          <Form.Group controlId="price" className="mb-3">
            <Form.Label>Precio</Form.Label>
            <InputGroup>
              <InputGroup.Text>$</InputGroup.Text>
              <Form.Control type="text" placeholder="110.40" />
            </InputGroup>
          </Form.Group>

          <Form.Group controlId="tags" className="mb-3">
            <Form.Label>Tag</Form.Label>
            <div className="d-flex gap-2">
              <Button variant="secondary" size="sm">Lorem</Button>
              <Button variant="secondary" size="sm">Ipsum</Button>
            </div>
          </Form.Group>
        </Col>

        <Col md={6}>
          <div className="d-flex flex-column align-items-center">
            <div
              style={{
                width: '100%',
                height: '200px',
                backgroundColor: '#e9ecef',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                marginBottom: '1rem'
              }}
            >
              <span className="text-muted">Vista previa de imagen</span>
            </div>
            <Form.Group controlId="imageUpload" className="mb-3 text-center">
              <Form.Label>Galería de producto</Form.Label>
              <div
                className="border rounded p-3 text-muted"
                style={{ borderStyle: 'dashed' }}
              >
                <p>Inserte su imagen aquí</p>
                <p>Jpeg, png son permitidos</p>
              </div>
            </Form.Group>
            <div>
              {[...Array(3)].map((_, index) => (
                <div key={index} className="d-flex align-items-center mb-2">
                  <div
                    style={{
                      width: '50px',
                      height: '50px',
                      backgroundColor: '#e9ecef',
                      marginRight: '10px'
                    }}
                  ></div>
                  <span className="flex-grow-1">Product thumbnail.png</span>
                  <Button variant="outline-secondary" size="sm">x</Button>
                </div>
              ))}
            </div>
          </div>
        </Col>
      </Row>

      <div className="d-flex justify-content-between mt-4">
        <Button variant="dark">ACTUALIZAR</Button>
        <Button variant="outline-danger">ELIMINAR</Button>
        <Button variant="outline-secondary">CANCELAR</Button>
      </div>
    </Form>
  );
};

export default ProductForm;
