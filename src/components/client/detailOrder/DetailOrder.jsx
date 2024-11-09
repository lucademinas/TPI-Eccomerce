import React, { useContext } from "react";
import { Button, Container, Row, Col, Card, Table, Form } from "react-bootstrap";
import { CartContext } from "../../../context/CartContext";
import { API_BASE_URL } from "../../../api";
import { jwtDecode } from "jwt-decode";
import { useNavigate } from "react-router-dom";

const DetailOrder = () => {
    const { cart, removeFromCart, increaseQuantity, decreaseQuantity,emptyCart } = useContext(CartContext); // Obtén los productos del carrito

    const total = cart.reduce((acu, product) => acu + product.price * product.quantity, 0);
    const idClient = jwtDecode(localStorage.getItem("Ecommerce-token")).sub
    console.log(idClient)
    console.log(cart)
    console.log(JSON.stringify(cart.map(x=>({productId:x.id,amount:x.quantity}))))
    
    const handleRemoveFromCart = (id) => {
        removeFromCart(id); // Remover producto del carrito
    };
    
    const navigate =useNavigate()

    
    const handleFinishedOrder = async () => {
        try {
            const res = await fetch(`${API_BASE_URL}/Order/AddSaleOrder`, {
                method: "POST",
                headers: {
                    "Authorization": `Bearer ${localStorage.getItem("Ecommerce-token")}`,
                    "Content-type": "application/json"
                },
                body: JSON.stringify({
                    "clientId": idClient,
                    "orderDetails": cart.map(x=>({productId:x.id,amount:x.quantity}))
                    /*[ 
                      {
                        "productId": 0,
                        "amount": 0
                      }
                    ]*/
                  }),
            });

            if (res.ok) {
                alert("¡Orden completada exitosamente!");
                // Aquí podrías vaciar el carrito o redirigir al usuario
            } else {
                alert("Hubo un error al finalizar la orden.");
            }

            emptyCart()
            navigate("/")
        } catch (error) {
            console.log("Error al finalizar la orden:", error);
            alert("Ocurrió un error al intentar finalizar la orden.");
        }
    }    


    return (
        <Container className="mt-4">
            <Row>
                <Col>
                    <h2>Detalle de compra</h2>
                    {cart.length === 0 ? (
                        <p>No hay productos en el carrito</p>)
                        : (
                            <Table>
                                <thead>
                                    <tr>
                                        <th>Producto</th>
                                        <th>Tamaño</th>
                                        <th>Cantidad</th>
                                        <th>Precio</th>
                                        <th>Eliminar</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {cart.map((product, index) => (
                                        <tr key={index}>
                                            <td>
                                                <img
                                                    src={product.imageUrl}
                                                    alt={product.description}
                                                    style={{ width: '50px', marginRight: '10px' }}
                                                />
                                                {product.description}
                                            </td>
                                            <td className="text-center">{product.size}</td>
                                            <td>
                                                <Button variant="ligth" className="me-2" onClick={() => decreaseQuantity(product.id)}>-</Button>
                                                <span className="mx-2">{product.quantity}</span>
                                                <Button variant="ligth" className="me-2" onClick={() => increaseQuantity(product.id)}>+</Button>
                                            </td>
                                            <td>${(product.price * product.quantity).toFixed(2)}</td>
                                            <td>
                                                <Button
                                                    variant="danger"
                                                    onClick={() => handleRemoveFromCart(product.id)}
                                                >
                                                    &times;
                                                </Button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </Table>
                        )}
                    <h2>Total: ${total}</h2>

                </Col>

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
                                    />
                                    <Form.Check
                                        type="radio"
                                        label="Tarjeta de crédito"
                                        name="metodoPago"
                                        id="tarjeta-credito"
                                        value="Tarjeta de crédito"
                                    />
                                </Form.Group>

                                <Form.Group className="mb-3">
                                    <Form.Label>Nombre del titular</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Ingresa nombre del titular"
                                    />
                                </Form.Group>

                                <Form.Group className="mb-3">
                                    <Form.Label>Número de la tarjeta</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Ingresa número de la tarjeta"
                                    />
                                </Form.Group>

                                <Form.Group className="mb-3">
                                    <Row>
                                        <Col xs={7}>
                                            <Form.Control
                                                type="text"
                                                placeholder="Fecha de vencimiento"
                                            />
                                        </Col>
                                        <Col xs={5}>
                                            <Form.Control
                                                type="text"
                                                placeholder="CVV"
                                            />
                                        </Col>
                                    </Row>
                                </Form.Group>

                                <Button variant="dark" onClick={handleFinishedOrder} className="w-100">Pagar</Button>
                            </Form>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default DetailOrder;
