import React from "react";
import controller from "../../Controller/controller";
import "./grid.css"
// import {data} from "./temp";

export default class Grid extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            data: [],
        }
    }

    componentDidMount(){
        controller.getProducts().then(
            (data) =>{
                this.setState({data: data});
            }
        );

        
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