import React from 'react';
import { Card, Badge } from 'react-bootstrap';

const ProductCard = () => {
  return (
    <Card className="mb-4">
      <Card.Img
        variant="top"
        src="https://via.placeholder.com/100"
        alt="Product image"
        className="p-3"
      />
      <Card.Body>
        <Card.Title>Lorem Ipsum</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Camiseta</Card.Subtitle>
        <Card.Text className="fw-bold">$110.40</Card.Text>
        <Card.Text className="text-muted">Descripción</Card.Text>
        <Card.Text>
          Lorem ipsum is placeholder text commonly used in the graphic.
        </Card.Text>
        <div className="d-flex justify-content-between align-items-center mt-3">
          <Badge bg="primary">Ventas</Badge>
          <span>1208</span>
        </div>
        <div className="d-flex justify-content-between align-items-center mt-2">
          <Badge bg="secondary">Cantidad disponible</Badge>
          <span>1309</span>
        </div>
      </Card.Body>
    </Card>
  );
};

export default ProductCard;