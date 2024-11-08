import { jwtDecode } from "jwt-decode"
import { useEffect, useState } from "react"
import ClientView from "../client/clientView/ClientView"
import AdminView from "../admin/adminView/AdminView"
import { Navigate } from "react-router-dom"

const View = ({children})=>{

    const [decodedToken,setDecodedToken]=useState("a")

    useEffect(()=>{
        const token = localStorage.getItem('Ecommerce-token');
        setDecodedToken(jwtDecode(token))
    },[])
    
    switch(decodedToken.UserRol){
        case "Admin":return <AdminView>{children}</AdminView>
        case "Client":return <ClientView>{children}</ClientView>
        
    }
   // <Navigate to="/login" replace/>
}

export default View