import React from "react";
import "./grid.css"
// import {data} from "./temp";

export default class Grid extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            // data: data.slice(0, data.lenght),
        }
    }


    render(){
        console.log(this.state.data);
        return(
            <>
                <div className="vitrina"></div>
            </>
        )
    }
}