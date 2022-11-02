import React from "react";
import Sidebar from "./sidebar";
import "./container.css"
import Grid from "./grid";

export default class Container extends React.Component{
    render(){
        return(
            <div className="container">
                <Sidebar></Sidebar>
                <Grid></Grid>
            </div>
        )
    }

}