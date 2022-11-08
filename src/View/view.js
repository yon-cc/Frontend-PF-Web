import React from "react";
import Home from "./Pages/home";
import { Routes, Route } from "react-router";

export default class View extends React.Component{
    render(){
        return(
            <>  
                <Routes>
                    <Route path="/" element={<Home></Home>}></Route>
                    <Route path="/mi-cuenta" element={<Cuenta></Cuenta>}></Route>
                    <Route path="/carrito" element={<Carrito></Carrito>}></Route>
                </Routes>
            </>
        )
    }
}


function Cuenta(){
    return(<>
        <h1>Mi Cuenta</h1>
    </>)
}


function Carrito(){
    return(<>
        <h1>Mi Carrito</h1>
    </>)
}