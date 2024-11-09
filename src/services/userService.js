import { API_BASE_URL } from "../api";

export const fetchUsers = async () => {
    try {
        const token = localStorage.getItem("Ecommerce-token");
        const response = await fetch(`${API_BASE_URL}/Sys/GetAllUsers`, {
            method: "GET",
            headers: {
                "Authorization": `Bearer ${token}`,
                "Content-Type": "application/json"
            }
        });

        if (!response.ok) {
            throw new Error("La respuesta falló");
        }

        const data = await response.json();
        return data;

    } catch (error) {
        console.error("Error fetching users: ", error);
        return []; // Devuelve un array vacío en caso de error
    }
}
export const deleteUserService = async (id) => {
    try {
        const token = localStorage.getItem("Ecommerce-token");
        const response = await fetch(`${API_BASE_URL}/Sys/DeleteUser/${id}`, {
            method: "DELETE",
            headers: {
                "Authorization": `Bearer ${token}`,
                "Content-Type": "application/json"
            }
        });

        if (!response.ok) {
            throw new Error("La respuesta falló");
        }
        console.log("Usuario eliminado con éxito")
    } catch (error) {
        console.error("Error eliminando el usuario:", error);
    }
}

