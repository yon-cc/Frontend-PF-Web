import React from "react";
import Sidebar from "./sidebar";
import "./container.css"

export default class Container extends React.Component{
    render(){
        return(
            <div className="">
                <Sidebar></Sidebar>
            </div>
        )
    }

}