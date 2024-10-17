import { useEffect, useState } from "react";
import { API_BASE_URL } from "../../api";
import { Container, Table, Row, Col, Badge, Button } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaEdit, FaTrash, FaUserCircle } from "react-icons/fa";
import CommonNavbar from "../navbar/CommonNavbar";

const SysAdminTable = () => {
    const [users, setUsers] = useState([])

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const token = localStorage.getItem("Ecommerce-token");
                const response = await fetch(`${API_BASE_URL}/User`, {
                    method: "GET",
                    headers: {
                        "Authorization": `Bearer ${token}`,
                        "Content-Type": "application/json"
                    }
                });

                if(!response.ok){
                    throw new Error("La respuesta falló");
                }

                const data = await response.json();
                setUsers(data);
                
            } catch (error) {
                console.error("Error fetching users: ", error)
            }
        }
        fetchUsers();
    }, [])

    return (
        <Container>
            <CommonNavbar />
            <Row className="mb-4">
                <Col>
                    <div className="d-flex justify-content-between align-items-center">
                        <h1 className="fw-bold">SysAdmin</h1>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col>
                    <h2 className="mb-4">Usuarios</h2>
                    <Table striped hover responsive>
                        <thead>
                            <tr>
                                <th>Nombre de usuario</th>
                                <th>ID</th>
                                <th>Fecha de inicio</th>
                                <th>Rol</th>
                                <th>Acción</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.map((user =>
                                <tr key={user.id}>
                                    <td>
                                        <div className="d-flex align-items-center">
                                            <FaUserCircle size={40} className="me-2" />
                                            {user.name}
                                        </div>
                                    </td>
                                    <td>#{user.id}</td>
                                    <td>27/11/2024</td>
                                    <td>
                                        <Badge bg={user.userRol === 'Client' ? 'danger' : 'primary'}>
                                            {user.userRol}
                                        </Badge>
                                    </td>
                                    <td>
                                        <Button variant="outline-secondary" size="sm" className="me-2" title="Editar">
                                            <FaEdit />
                                        </Button>
                                        <Button variant="outline-secondary" size="sm" title="Eliminar">
                                            <FaTrash />
                                        </Button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </Col>
            </Row>
        </Container>
    )
}

export default SysAdminTable;