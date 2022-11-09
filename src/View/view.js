import React, { useState } from "react";
import Home from "./Pages/home";
import { Routes, Route, Navigate, Outlet, Link,useNavigate } from "react-router-dom";
import FavoritesView from "./Pages/favoritesView";
import Order from "./Pages/order";

export default class View extends React.Component{
    render(){
        return(
            <>  
                <Routes>
                    <Route path="/" element={<Home></Home>}></Route>
                    <Route element={<PrivateRoutes></PrivateRoutes>}>
                        <Route path="/favoritos" element={<FavoritesView></FavoritesView>}></Route>
                        <Route path="/pedido" element={<Order></Order>}></Route>
                        <Route path="/mi-cuenta" element={<Cuenta></Cuenta>}></Route>
                        <Route path="/carrito" element={<Carrito></Carrito>}></Route>
                        

                    </Route>

                </Routes>
            </>
        )
    }
}


function Cuenta(){
    const navigate = useNavigate();

    const logOut = ()=>{
        sessionStorage.removeItem("auth");
        sessionStorage.removeItem("user");
        navigate("/");
        // return <Navigate to='/'></Navigate>
        // setReload(!reload)
    }

    return(<>
        <div style={{margin: "auto", width:"500px", marginTop:"200px", textAlign:"center", border:"1px solid green"}}>

            <h1 style={{color:"green"}}>Mi Cuenta</h1>
            <h2>Bienvenido {sessionStorage.getItem("user")}</h2>
            <h3 style={{margin:"10px 0px", textDecoration:"underline", color:"darkgreen", cursor:"pointer"}}  onClick={logOut}>Cerrar Sesion </h3>
            <Link style={{margin:"10px 0px", textDecoration:"underline", color:"darkgreen", cursor:"pointer", fontSize:"1.2rem", fontWeight:'bold'}} to="/">Volver a la tienda</Link>
        </div>
    </>)
}


function Carrito(){
    return(<>
        <h1>Mi Carrito</h1>
    </>)
}

const PrivateRoutes = () => {
    let auth = {'token':sessionStorage.getItem('auth')==="true"}
    return (
      auth.token ? <Outlet/> : <Navigate to='/'/>
    )
  }