import { useEffect, useState } from "react"
import "./clientList.css"
import { API_BASE_URL } from "../../api"

const ClientList=()=>{

const [clients,setClients]=useState([])

useEffect(()=>{
    try{
        fetch(`${API_BASE_URL}/api/User`,{
            headers: {
              accept: "application/json",
              "Authorization": `Bearer ${localStorage.getItem("Ecommerce-token")}`
            }})
        .then((res)=>{
            if(!res.ok)
                throw new Error()
            return res.json()
        })
        .then((data)=>{
            setClients(data)
        })
        .catch((e)=>{
            console.log(e)
        })
    }
    catch(e){}
}

,[])

return (
<div className="contClientList">
<div className="clientAndButtons">
    <div className="contHead">
    <p className="headClientList">Cliente</p>
    <p className="headClientList">Id Cliente</p>
    <p className="headClientList">Fecha Registro</p>
    <p className="headClientList">Direccion</p>
    <p className="headClientList">Eliminar</p>
    </div>

    <div className="client">
        <div className="name-img">
            <img src="https://img.freepik.com/foto-gratis/cierrese-encima-retrato-cara-joven-hombre-barbudo_171337-2887.jpg" alt="" />
            <p>Fernando Koss</p>
        </div>
        <p>
            32423423423
        </p>
        <p>
            28/09/2003
        </p>
        <p>
            Zeballos 324234
        </p>
        <p>
            X
        </p>
    </div>

    <div className="client">
        <div className="name-img">
            <img src="https://img.freepik.com/foto-gratis/cierrese-encima-retrato-cara-joven-hombre-barbudo_171337-2887.jpg" alt="" />
            <p>Fernando Koss</p>
        </div>
        <p>
            32423423423
        </p>
        <p>
            28/09/2003
        </p>
        <p>
            Zeballos 324234
        </p>
        <p>
            X
        </p>
    </div>

    <div className="client">
        <div className="name-img">
            <img src="https://img.freepik.com/foto-gratis/cierrese-encima-retrato-cara-joven-hombre-barbudo_171337-2887.jpg" alt="" />
            <p>Fernando Koss</p>
        </div>
        <p>
            32423423423
        </p>
        <p>
            28/09/2003
        </p>
        <p>
            Zeballos 324234
        </p>
        <p>
            X
        </p>
    </div>

    <div className="client">
        <div className="name-img">
            <img src="https://img.freepik.com/foto-gratis/cierrese-encima-retrato-cara-joven-hombre-barbudo_171337-2887.jpg" alt="" />
            <p>Fernando Koss</p>
        </div>
        <p>
            32423423423
        </p>
        <p>
            28/09/2003
        </p>
        <p>
            Zeballos 324234
        </p>
        <p>
            X
        </p>
    </div>

    <div className="client">
        <div className="name-img">
            <img src="https://img.freepik.com/foto-gratis/cierrese-encima-retrato-cara-joven-hombre-barbudo_171337-2887.jpg" alt="" />
            <p>Fernando Koss</p>
        </div>
        <p>
            32423423423
        </p>
        <p>
            28/09/2003
        </p>
        <p>
            Zeballos 324234
        </p>
        <p>
            X
        </p>
    </div>

    <div className="clientListButtons">
        <button>1</button>
        <button>2</button>
        <button>3</button>
    </div>
    </div>

</div>
)

/*
clients.map((x)=><div className="client">
<div className="name-img">
    <img src={x.Img} alt="" />
    <p>{x.Name}</p>
</div>
<p>
    {x.Id}
</p>
<p>
    {x.Birth}
</p>
<p>
    {x.Address}
</p>
<p>
    X
</p>
</div>)
*/




}

export default ClientList