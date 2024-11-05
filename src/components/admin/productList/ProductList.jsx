
import React from 'react';
import { Row, Col, Card, Button, Badge, Pagination, Form } from 'react-bootstrap'; 
import ProductCard from "../productCard/ProductCard";
const ProductList = () => {
    return (
      <div className="p-4">
        {/* Header */}
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h4>Productos</h4>
          <Button variant="primary">➕ Agregar Nuevo Producto</Button>
        </div>
  
        {/* Product Grid */}
        <Row xs={1} sm={2} md={3} lg={4}>
          {[...Array(12)].map((_, index) => (
            <Col key={index}>
              <ProductCard />
            </Col>
          ))}
        </Row>
  
        {/* Pagination */}
        <div className="d-flex justify-content-between align-items-center mt-4">
          <Pagination>
            <Pagination.First />
            <Pagination.Prev />
            <Pagination.Item>{1}</Pagination.Item>
            <Pagination.Item>{2}</Pagination.Item>
            <Pagination.Item>{3}</Pagination.Item>
            <Pagination.Item>{4}</Pagination.Item>
            <Pagination.Item>{5}</Pagination.Item>
            <Pagination.Next />
            <Pagination.Last />
          </Pagination>
  
          <Form.Select style={{ width: 'auto' }} aria-label="Items per page">
            <option>10</option>
            <option>20</option>
            <option>50</option>
          </Form.Select>
        </div>
      </div>
    );
  };
  
  export default ProductList;