import React, { useEffect, useState } from 'react';
import { useAuth } from '../../../hooks/AuthContext';
import { Table, Container, Row, Col } from 'react-bootstrap';
import { API_BASE_URL } from '../../../api';
import 'bootstrap/dist/css/bootstrap.min.css';

const OrderList = () => {
    const [orders, setOrders] = useState([]);

    const { user } = useAuth();
    const clientId = user?.id;

    useEffect(() => {
        const fetchOrders = async () => {
            console.log(clientId)
            if (!clientId) return; // Asegurarse de que clientId esté disponible antes de continuar

            try {
                const token = localStorage.getItem('Ecommerce-token');
                const response = await fetch(`${API_BASE_URL}/Order/GetAllByClient/${clientId}`, {
                    method: 'GET',
                    headers: {
                        'Authorization': `Bearer ${token}`,  // Incluir el token en las cabeceras
                    },
                });
        
                if (!response.ok) {
                    throw new Error("No se pudieron obtener las órdenes");
                }
        
                const data = await response.json();
                setOrders(data);
            } catch (error) {
                console.error("Error al obtener las órdenes:", error);
            }
        };

        fetchOrders();
    }, [clientId]); // Dependencia en clientId para ejecutar el efecto cuando cambie

    return (
        <Container className="my-5">
            <Row className="text-center">
                <Col>
                    <h1 className="display-4">Lista de pedidos</h1>
                </Col>
            </Row>
            <Row className="mt-4">
                <Col>
                    <h3 className="text-muted">Compras recientes</h3>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Table striped bordered hover responsive="md" className="mt-3">
                        <thead>
                            <tr>
                                <th>Producto</th>
                                <th>ID</th>
                                <th>Cantidad</th>
                                <th>Precio total</th>
                            </tr>
                        </thead>
                        <tbody>
                            {orders.map(order => (
                                order.orderDetails.map(detail => (
                                    <tr key={`${order.id}-${detail.product.id}`}>
                                        <td>{detail.product.description}</td>
                                        <td>{order.id}</td>
                                        <td>{detail.amount}</td>
                                        <td>${(detail.amount * detail.product.price).toFixed(2)}</td>
                                    </tr>
                                ))
                            ))}
                        </tbody>
                    </Table>
                </Col>
            </Row>
        </Container>
    );
};

export default OrderList;
