import { useEffect, useState } from "react";
import "./clientList.css";
import { API_BASE_URL } from "../../../api"; // Asegúrate de que esta constante esté definida correctamente
import user from "../../../assets/user.webp";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

const ClientList = () => {
    const [clients, setClients] = useState([]);

    useEffect(() => {
        const fetchClients = async () => {
            try {
                const response = await fetch(`${API_BASE_URL}/client/GetAllClients`, {
                    headers: {
                        accept: "application/json",
                        "Authorization": `Bearer ${localStorage.getItem("Ecommerce-token")}`
                    }
                });

                if (!response.ok) {
                    throw new Error("Error al obtener los clientes");
                }

                const data = await response.json();
                setClients(data);
            } catch (error) {
                console.error("Error fetching clients:", error);
            }
        };

        fetchClients();
    }, []);

    const handleDeleteClient = async (clientId) => {
        try {
            const response = await fetch(`${API_BASE_URL}/client/DeleteClient/${clientId}`, {
                method: 'DELETE',
                headers: {
                    accept: "application/json",
                    "Authorization": `Bearer ${localStorage.getItem("Ecommerce-token")}`
                }
            });

            if (!response.ok) {
                throw new Error("Error al eliminar el cliente");
            }

            // Actualiza la lista de clientes después de eliminar
            setClients(clients.filter(client => client.id !== clientId));
        } catch (error) {
            console.error("Error deleting client:", error);
        }
    };

    return (
        <div className="contClientList">
            <div className="clientAndButtons">
                <div className="contHead">
                    <p className="headClientList">Cliente</p>
                    <p className="headClientList">Id Cliente</p>
                    <p className="headClientList">Fecha Registro</p>
                    <p className="headClientList">Email</p>
                    <p className="headClientList">Eliminar</p>
                </div>

                {clients.map((client) => (
                    <div className="client" key={client.id}>
                        <div className="name-img">
                            <img src={user} alt="" />
                            <p>{client.name}</p>
                        </div>
                        <p>{client.id}</p>
                        <p>{new Date(client.registrationDate).toLocaleDateString()}</p>
                        <p>{client.email}</p>
                        <p>
                            <FontAwesomeIcon 
                                icon={faTrash} 
                                onClick={() => handleDeleteClient(client.id)} 
                                style={{ cursor: 'pointer', color: 'red' }} 
                            />
                        </p>
                    </div>
                ))}

                <div className="clientListButtons">
                    <button>1</button>
                    <button>2</button>
                    <button>3</button>
                </div>
            </div>
        </div>
    );
};

export default ClientList;