import { Navigate } from "react-router-dom"

const Protected = ({ children }) => {
    const token = localStorage.getItem("Ecommerce-token")
    
    if (!token) { 
        return <Navigate to="/login" replace />
    }
    return children
}

export default Protected