import React, { useEffect, useState } from 'react';
import { Row, Col, Card, Button, Badge, Pagination, Form } from 'react-bootstrap'; 
import { API_BASE_URL } from '../../../api';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../../hooks/AuthContext';

const ProductList = () => {
    const [products, setProducts] = useState([]);
    const navigate = useNavigate();

    const { user } = useAuth();
    const adminId = user?.id;

    useEffect(() => {
        fetchProducts();
    }, [adminId]);

    const fetchProducts = async () => {
        console.log(adminId)
        if (!adminId) return; // Asegurarse de que clientId esté disponible antes de continuar
        try {
            console.log(adminId)
            const response = await fetch(`${API_BASE_URL}/Product/GetProductsByAdmin/${adminId}`, {
                headers: {
                    accept: "application/json",
                    "Authorization": `Bearer ${localStorage.getItem("Ecommerce-token")}`
                },
            });

            if (!response.ok) {
                throw new Error("La respuesta falló");
            }

            const data = await response.json();
            setProducts(data);
        } catch (error) {
            console.error("Error fetching products", error);
        }
    };

    const handleAddNewProduct = () => {
        navigate('/product-form');
    };


    return (
        <div className="p-4">
            {/* Header */}
            <div className="d-flex justify-content-between align-items-center mb-4">
                <h4>Productos</h4>
                <Button variant="primary" onClick={handleAddNewProduct}>➕ Agregar Nuevo Producto</Button>
            </div>
  
            {/* Product Grid */}
            <Row xs={1} sm={2} md={3} lg={4}>
                {products.map((product) => (
                    <Col key={product.id}>
                        <Card className="mb-4">
                            <Card.Img variant="top" src={product.imageUrl} />
                            <Card.Body>
                                <Card.Title>{product.description}</Card.Title>
                                <Card.Text>
                                    Precio: ${product.price}<br/>
                                    Talle: {product.size}<br/>
                                    Stock: {product.stock}
                                </Card.Text>
                                <Button variant="primary" size="sm" >Editar</Button>
                                <Button variant="danger" size="sm" className="ms-2" >Eliminar</Button>
                            </Card.Body>
                        </Card>
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