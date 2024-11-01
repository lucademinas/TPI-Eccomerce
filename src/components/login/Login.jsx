import { useRef, useState } from "react"
import { Form, Row, Button, Col, Container } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from "../../assets/Logo-Diego.jpg";
import './Login.css'
import { useNavigate } from "react-router-dom";
import { API_BASE_URL } from "../../api";
import { jwtDecode } from "jwt-decode";



const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState({ email: false, password: false });

    const emailRef = useRef(null);
    const passwordRef = useRef(null);


    const navigate = useNavigate();

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
        setErrors(prevErrors => ({
            ...prevErrors,
            email: e.target.value.length === 0
        }));
    }

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
        setErrors(prevErrors => ({
            ...prevErrors,
            password: e.target.value.length === 0
        }));
    }

    const handleRegisterClick = () => {
        navigate("/register");
    }

    const handleLogin = async () => {
        if (emailRef.current.value.length === 0) {
            alert("¡Email vacio!")
            emailRef.current.focus();
            setErrors(prevErrors => ({
                ...prevErrors,
                email: true
            }));
            return
        }

        if (passwordRef.current.value.length === 0) {
            alert("¡Contraseña Vacia!")
            passwordRef.current.focus();
            setErrors(prevErrors => ({
                ...prevErrors,
                password: true
            }))
            return
        }

        try{
            const response = await fetch(`${API_BASE_URL}/Authentication`, {
                method: "POST",
                headers: {
                    "Content-type" : "application/json"
                },
                body: JSON.stringify({email, password})
            });

            if(!response.ok){
                throw new Error("Error al iniciar sesión")
            }

            const data = await response.text()
            console.log("Token recibido:", data);
            localStorage.setItem("Ecommerce-token", data);

            const decoded = jwtDecode(data)
            const userRole = decoded.UserRol;
            if(userRole === "Sysadmin") {
                navigate("/sysadmin");
            } else{
                navigate("/");
            }
            
        

        } catch(error){
            console.error(error);
        }


       
    }

    return (

        <Container fluid className="login-container">

            <Row className="align-items-center justify-content-center min-vh-100">
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
                                    ref={emailRef}
                                />
                                {errors.email && <p className="text-danger">El email no debe estar vacío</p>}
                            </Form.Group>

                            <Form.Group className="mb-3">
                                <Form.Label>Contraseña</Form.Label>
                                <Form.Control
                                    type="password"
                                    placeholder="Ingrese su contraseña"
                                    onChange={handlePasswordChange}
                                    value={password}
                                    ref={passwordRef}
                                />
                                {errors.password && <p className="text-danger">La contraseña no debe estar vacía</p>}
                            </Form.Group>

                            <Button variant="dark" className="w-100 mb-3" onClick={handleLogin}>
                                Iniciar Sesión
                            </Button>
                            <Button variant="link" onClick={handleRegisterClick} className="text-dark">
                                No tienes cuenta? Regístrate aquí
                            </Button>
                        </Form>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default Login;
