import { useEffect, useState } from "react";
import { API_BASE_URL } from "../../api";
import { Container, Table, Row, Col, Badge, Button, Form } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaEdit, FaTrash, FaUserCircle } from "react-icons/fa";
import { fetchUsers, deleteUserService } from "../../services/userService";
import CommonNavbar from "../shared/navbar/CommonNavbar";

const SysAdminTable = () => {
    const [users, setUsers] = useState([])
    const [updateName, setUpdateName] = useState("")
    const [editId, setEditId] = useState(null)

    useEffect(() => {
        const getUsers = async () => {
          try {
            const data = await fetchUsers();
            setUsers(data || []); // Si data es null o undefined, usa un array vacío
          } catch (error) {
            console.error("Error fetching users:", error);
            setUsers([]); // En caso de error, establece users como un array vacío
          }
        }
        getUsers();
      }, [])

    const deleteUser = async (id) => {
        const response = await deleteUserService(id)
        setUsers(users.filter((user) => user.id !== id))
    }

    const updateUser = async (id) => {
    try {
        const token = localStorage.getItem("Ecommerce-token");

        // Verifica que el campo 'Email' esté presente en el usuario
        const userToUpdate = users.find((user) => user.id === id);
        const { name, email } = userToUpdate; 

        const response = await fetch(`${API_BASE_URL}/Sys/UpdateUser/${id}`, {
            method: "PUT",
            headers: {
                "Authorization": `Bearer ${token}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name: updateName,
                email: email 
            })
        });

        if (!response.ok) {
            throw new Error(`Error al actualizar el usuario`);
        }

        setUsers(users.map((user) => user.id === id ? { ...user, name: updateName } : user));
        setEditId(null);
        setUpdateName("");
        console.log("El usuario fue actualizado correctamente");
    } catch (error) {
        console.error("Error actualizando el usuario: ", error);
        alert(`Error actualizando el usuario: ${error.message}`);
    }
}
    
    const handleUserDelete = (id) => {
        deleteUser(id);
    }

    const handleUpdateUser = (id) => {
        updateUser(id);
    }

    const handleEditClick = (id, newName) => {
        setEditId(id)
        setUpdateName(newName)
    }


    const userFiltered = users ? users.filter((user) => user.userRol !== "Sysadmin") : [];

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
                        {userFiltered.map((user) => (
                                <tr key={user.id}>
                                    <td>
                                        {editId === user.id ? (
                                            <Form.Control
                                                type="text"
                                                value={updateName}
                                                onChange={(e) => setUpdateName(e.target.value)}
                                            />
                                        ) : (
                                            <div className="d-flex align-items-center">
                                                <FaUserCircle size={40} className="me-2" />
                                                {user.name}
                                            </div>
                                        )}
                                    </td>
                                    <td>#{user.id}</td>
                                    <td>{user.startDate.split("T")[0]}</td>
                                    <td>
                                        <Badge bg={user.userRol === 'Client' ? 'danger' : 'primary'}>
                                            {user.userRol}
                                        </Badge>
                                    </td>
                                    <td>
                                        {editId === user.id ? (
                                            <Button variant="outline-success" size="sm" onClick={() => handleUpdateUser(user.id)}>
                                                Guardar
                                            </Button>
                                        ) : (
                                            <Button variant="outline-secondary" size="sm" className="me-2" onClick={() => handleEditClick(user.id, user.name)}>
                                                <FaEdit />
                                            </Button>
                                        )}
                                        <Button onClick={() => handleUserDelete(user.id)} variant="outline-secondary" size="sm" title="Eliminar">
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
    );
};

export default SysAdminTable;