import { Navigate } from "react-router-dom"

const Protected = ({ children }) => {
    let isSignedIn = true
    const token = localStorage.getItem("Ecommerce-token")
    
    if (!isSignedIn) { // if(!token){
        return <Navigate to="/" replace />
    }
    return children
}

export default Protected