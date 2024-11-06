import { useContext, useState } from "react";
import { Button, Card, Col, Container, Form, Row, } from "react-bootstrap";
import { useLocation, useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaUserCircle, FaStar } from "react-icons/fa";
import { CartContext } from "../../../context/CartContext";


const ProductDetail = () => {
    const {addToCart,cart} = useContext(CartContext);
    
    const [selectedSize, setSelectedSize] = useState("Talle")
    
    const { state } = useLocation();
    const { product } = state || {};

    const navigate = useNavigate();

    const handleSizeChange = (e) => {
        setSelectedSize(e.target.value);
    }

    const handleAddClick = () => {
        
        const productToAdd = {...product, size: selectedSize};
        

        if(!cart.map(x=>x.Id).includes(productToAdd.Id)){
        
        addToCart(productToAdd);
        alert("Producto añadido correctamente")
        navigate("/detail-order");
     }
    

    }

    const reviews = [
        {
            user: 'Juan Pérez',
            date: '2024-09-01',
            comment: '¡Excelente camiseta! La calidad es increíble y el tamaño es perfecto.',
            rating: 5
        },
        {
            user: 'María López',
            date: '2024-09-10',
            comment: 'Me encantó el diseño, pero el color no es exactamente como se muestra en la imagen.',
            rating: 4
        },
        {
            user: 'Carlos Gómez',
            date: '2024-09-15',
            comment: 'La camiseta es cómoda, ideal para el día a día. Muy recomendada.',
            rating: 5
        },
        {
            user: 'Ana Sánchez',
            date: '2024-09-20',
            comment: 'El envío fue rápido y el producto llegó en perfectas condiciones. ¡Lo volveré a comprar!',
            rating: 4
        },
    ];

    return (
        <Container className="mt-4">
        <Row className="d-flex align-items-stretch">
            {/* Imagen del producto */}
            <Col md={6} className="text-center">
                <Card className="h-100">
                    <Card.Img variant="top" src={product.imageUrl} alt={product.description} />
                </Card>
            </Col>

            <Col md={6} className="d-flex flex-column justify-content-between">
                    <div className="flex-grow-1">
                        <div>
                            <h2 className="display-4">{product.description}</h2>
                            <h3 className="display-5">${product.price}</h3>
                            <Form.Group className="mt-3">
                                <Form.Label>Tamaño</Form.Label>
                                <Form.Select value={selectedSize} onChange={handleSizeChange}>
                                    <option value="S">S</option>
                                    <option value="M">M</option>
                                    <option value="L">L</option>
                                    <option value="XL">XL</option>
                                </Form.Select>
                            </Form.Group>
                            <Button className="mt-4 mb-4 w-100 btn-lg" variant="dark" onClick={handleAddClick}>Añadir al carrito</Button>
                        </div>
                        <Card className="mt-auto">
                            <Card.Body>
                                <Card.Text className="fs-5"><strong>Descripción:</strong> Camiseta suplente Selección Argentina en la Copa del Mundo Estados Unidos 1994.</Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                </Col>
        </Row>

        {/* Sección de Reseñas */}
        <Row className="mt-5">
            <Col>
                <h5>Últimas reseñas</h5>
                <Row>
                    {reviews.map((review, index) => (
                        <Col md={4} key={index}>
                            <Card className="mb-3">
                                <Card.Body>
                                    <div className="d-flex align-items-center mb-2">
                                        <FaUserCircle size={30} className="me-2"/>
                                        <div>
                                        <strong>{review.user}</strong> - {review.date}
                                        </div>
                                    </div>
                                    <Card.Text>{review.comment}</Card.Text>
                                    <div>
                                            {Array.from({ length: review.rating }).map((_, i) => (
                                                <FaStar key={i} className="text-warning me-1" />
                                            ))}
                                        </div>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Col>
        </Row>
    </Container>
    )

}

export default ProductDetail;