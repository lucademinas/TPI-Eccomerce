import logo from "../../img/Logo-Diego.jpg";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Row, Button, Col, Container } from "react-bootstrap";
import './NewUser.css'
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { API_BASE_URL } from "../../api";

const NewUser = () => {
    const [userName, setUserName] = useState("");
    const [userLastName, setUserLastName] = useState("");
    const [userEmail, setUserEmail] = useState("");
    const [userPassword, setUserPassword] = useState("");
    const [userRol, setUserRol] = useState("");
    const navigate = useNavigate();

    const handleNameChange = (e) => {
        setUserName(e.target.value);
    }

    const handleLastNameChange = (e) => {
        setUserLastName(e.target.value);
    }

    const handleEmailChange = (e) => {
        setUserEmail(e.target.value);
    }

    const handlePasswordChange = (e) => {
        setUserPassword(e.target.value);
    }

    const handleUserRol = (e) => {
        setUserRol(e.target.value);
    }

    const handleNavigateClick = () => {
        navigate("/");
    }

    const handleSubmitUser = async (e) => {
        e.preventDefault();
        const newUser = {
            name: `${userName} ${userLastName}`,
            email: userEmail,
            password: userPassword,
            userRol: userRol
        };

        console.log("Enviando usuario: ", newUser);

        try {
            const response = await fetch(`${API_BASE_URL}/User`, {
                method: "POST",
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify(newUser)
            });

            const responseText = await response.text();
            console.log("Respuesta del servidor:", responseText); 

            if (!response.ok) {
                throw new Error("Error al registrar usuario: ", responseText);
            }

            const data = JSON.parse(responseText);
            console.log("Usuario registrado: ", data);

            setUserName("");
            setUserLastName("");
            setUserEmail("");
            setUserPassword("");
            setUserRol("");
            navigate("/login")

        } catch(error){
            console.error(error);
        }
    }

    return (
        <Container fluid className="register-container">

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
                    <div className="register-form">
                        <h2 className="text-center">Registrarse</h2>
                        <Form onSubmit={handleSubmitUser}>
                            <Form.Group className="mb-3">
                                <Form.Label>Nombre</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Nombre"
                                    value={userName}
                                    onChange={handleNameChange}
                                />
                            </Form.Group>

                            <Form.Group className="mb-3">
                                <Form.Label>Apellido</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Apellido"
                                    value={userLastName}
                                    onChange={handleLastNameChange}

                                />
                            </Form.Group>

                            <Form.Group className="mb-3">
                                <Form.Label>Email</Form.Label>
                                <Form.Control
                                    type="email"
                                    placeholder="Email"
                                    value={userEmail}
                                    onChange={handleEmailChange}

                                />
                            </Form.Group>

                            <Form.Group className="mb-3">
                                <Form.Label>Contraseña</Form.Label>
                                <Form.Control
                                    type="password"
                                    placeholder="Contraseña"
                                    value={userPassword}
                                    onChange={handlePasswordChange}

                                />
                            </Form.Group>

                            <Form.Group className="mb-3">
                                <Form.Label>Rol</Form.Label>
                                <Form.Select value={userRol} onChange={handleUserRol} >
                                    <option value="">Seleccionar rol</option>
                                    <option value="Client">Client</option>
                                    <option value="Admin">Admin</option>
                                </Form.Select>
                            </Form.Group>

                            <Button variant="dark" type="submit" className="w-100 mb-3">
                                Registrarse
                            </Button>

                            <Button variant="link" onClick={handleNavigateClick} className="text-dark">
                                Ya tienes una cuenta? Inicia sesión
                            </Button>

                        </Form>
                    </div>
                </Col>
                <hr />
            </Row>
        </Container>

    )
}

export default NewUser;