import React, { createContext, useContext, useState, useEffect } from 'react';
import { jwtDecode } from "jwt-decode";


const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const token = localStorage.getItem('Ecommerce-token');
        if (token) {
            try {
                const decodedToken = jwtDecode(token);
                console.log("Decoded Token:", decodedToken); // Ver el token decodificado completo
                // Asegúrate de que el ID esté presente en el token
                if (decodedToken.sub) {
                    console.log("User ID:", decodedToken.sub); // Mostrar el ID del usuario
                    setUser({ id: decodedToken.sub });
                } else {
                    console.log("No ID found in token");
                }
            } catch (error) {
                console.error("Error decoding token:", error);
            }
        } else {
            console.log("No token found in localStorage");
        }
    }, []);

    const login = (userData) => {
        setUser(userData);
    };

    return (
        <AuthContext.Provider value={{ user, login }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
