import { useState } from "react"
import { Card, Form, Row, FormGroup, Button, Col } from "react-bootstrap";


const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    }

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    }

    



    return (
        <div>
            <Col>
                <img src= "" alt="" />
            </Col>
             <Col>
            <Card>
                <Card.Body>
                    <Row>
                        <h1>Iniciar sesión</h1>
                    </Row>
                    <Form>
                        <FormGroup>
                            <Form.Control
                                placeholder="Ingrese su email"
                                type="email"
                                value={email}
                                onChange={handleEmailChange}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Form.Control
                                placeholder="Ingrese su password"
                                type="password"
                                value={password}
                                onChange={handlePasswordChange}
                            />
                        </FormGroup>

                    </Form>
                    <Row>
                        <Col />
                        <Col>
                            <Button variant="secondary" >
                                Iniciar sesión
                            </Button>

                        </Col>
                    </Row>
                </Card.Body>
            </Card>
        </Col>
        
        </div>
       
        



    )
}

export default Login;