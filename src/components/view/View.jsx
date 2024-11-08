import { jwtDecode } from "jwt-decode";
import { useEffect, useState } from "react";
import ClientView from "../client/clientView/ClientView";
import AdminView from "../admin/adminView/AdminView";
import GeneralView from "../generalView/GeneralView";
import { Navigate } from "react-router-dom";

const View = ({ children }) => {
    const [decodedToken, setDecodedToken] = useState(null);

    useEffect(() => {
        const token = localStorage.getItem('Ecommerce-token');
        
        if (token) {
            setDecodedToken(jwtDecode(token));
        }
    }, []);

    // Permitir acceso al dashboard sin necesidad de un token
    if (!decodedToken) {
        return <GeneralView>{children}</GeneralView>; 
    }

    switch(decodedToken.UserRol) {
        case "Admin":
            return <AdminView>{children}</AdminView>;
        case "Client":
            return <ClientView>{children}</ClientView>;
        default:
            return <Navigate to="/login" replace />;
    }
}

export default View;