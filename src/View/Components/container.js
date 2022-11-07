import React from "react";
import Sidebar from "./sidebar";
import "./container.css"
import Grid from "./grid";
import controller from '../../Controller/controller';


export default class Container extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            max:0,
            min:0,
            data: [],
            page: 1
        }
    }

    componentDidMount(){
        controller.getProducts(1).then(
            (data) =>{
                this.setState({data: data});
            }
        );


        controller.getMaxMin().then(
            (maxmin)=>{
                this.setState({max: maxmin.max, min:maxmin.min})
            }
        );
    }

    render(){
        return(
            <div className="container">
                <Sidebar min={this.state.min} max={this.state.max}></Sidebar>
                <Grid data={this.state.data}></Grid>
            </div>
        )
    }

}