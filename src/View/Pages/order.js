import React from "react";
import controller from "../../Controller/controller";
import { ProductCart } from "../Components/modal";

export default class Order extends React.Component{
    constructor(props){
        super(props);

        this.state = {data: [],total:[]}
    }

    componentDidMount(){
        controller.getCart(sessionStorage.getItem("user")).then( (data)=>{
            this.setState({data:data.slice(0,data.length-1), total :data.slice(data.length-1)})
        })
    }

    render(){
        return(
            <>
                <h1>Orden</h1>
                {this.state.data.map((item)=>{
                     return <ProductCart img={item[0].image} name={item[0].name} detail={item[0].detail} units={item[1].units} price={item[0].price}></ProductCart>
                })}
            </>
        )
    }
}