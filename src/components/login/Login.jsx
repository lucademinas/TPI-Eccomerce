import { useState } from "react"
import { Form, Row, Button, Col, Container } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from "../../img/Logo-Diego.jpg";
import './Login.css'
import { useNavigate } from "react-router-dom";


const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    }

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    }

    const handleRegisterClick = () => {
        navigate("/register");
    }

    return (

        <Container fluid className="login-container">

            <Row className="align-items-center justify-content-center min-vh-100">
                <hr />
                <Col xs={12} md={6} className="d-none d-md-block p-0">
                    <div className="image-container">
                        <img src={logo}
                            alt="Logo-Diego"
                            className="img-fluid"
                        />
                    </div>
                </Col>

                <Col xs={12} md={6} className="d-flex align-items-center justify-content-center">
                    <div className="login-form">
                        <h2 className="text-center">Iniciar Sesión</h2>
                        <Form>
                            <Form.Group className="mb-3">
                                <Form.Label>Email</Form.Label>
                                <Form.Control
                                    type="email"
                                    placeholder="Ingrese su email"
                                    onChange={handleEmailChange}
                                    value={email}
                                />
                            </Form.Group>

                            <Form.Group className="mb-3">
                                <Form.Label>Contraseña</Form.Label>
                                <Form.Control
                                    type="password"
                                    placeholder="Ingrese su contraseña"
                                    onChange={handlePasswordChange}
                                    value={password}
                                />
                            </Form.Group>

                            <Button variant="dark" className="w-100 mb-3">
                                Iniciar Sesión
                            </Button>
                            <Button variant="link" onClick={handleRegisterClick} className="text-dark">
                                No tienes cuenta? Regístrate aquí
                            </Button>
                        </Form>
                    </div>
                </Col>
                <hr />
            </Row>
        </Container>
    )
}

export default Login;
