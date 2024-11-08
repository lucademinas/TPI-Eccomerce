import { useContext } from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { useLocation, useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaUserCircle, FaStar } from "react-icons/fa";
import { CartContext } from "../../../context/CartContext";

const ProductDetail = () => {
    const {addToCart,cart} = useContext(CartContext);
    
    const { state } = useLocation();
    const { product } = state || {};

    const navigate = useNavigate();

    const handleAddClick = () => {
        if (!localStorage.getItem('Ecommerce-token')){
            return navigate("/login");
        }

        const productToAdd = {...product};
        
        if(!cart.map(x=>`${x.id}-${x.size}`).includes(`${productToAdd.id}-${productToAdd.size}`)){
            addToCart(productToAdd);
            alert("Producto añadido correctamente")
            navigate("/detail-order");
        }
        else{
            console.log(productToAdd)
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
                            <div className="mt-3">
                                <p><strong>Talle:</strong> {product.size}</p>
                            </div>
                            <Button className="mt-4 mb-4 w-100 btn-lg" variant="dark" onClick={handleAddClick}>
                                Añadir al carrito
                            </Button>
                        </div>
                        <Card className="mt-auto">
                            <Card.Body>
                                <Card.Text className="fs-5">
                                    <strong>Descripción:</strong> {product.description}
                                </Card.Text>
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