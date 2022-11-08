import React from "react";
import Sidebar from "./sidebar";
import "./container.css"
import Grid from "./grid";

export default class Container extends React.Component{
    render(){
        return(
            <>
            <div className="container">
                <Sidebar min={this.props.min} max={this.props.max}submitFilter={this.props.submitFilter} reset={this.props.reset} deletePrice={this.props.deletePrice}></Sidebar>
                <Grid data={this.props.data} ></Grid>
            </div>
            </>
        )
    }

}