import React from "react";
import "./grid.css"
// import {data} from "./temp";

export default class Grid extends React.Component{
    render(){
        console.log("PROPS")
        console.log(this.props.data);
        return(
            <>
                <div className="vitrina"></div>
                <Product></Product>
            </>
        )
    }
}


class Product extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            discount: undefined,
            cantDiscount: 0,
            favorte: false,
        }
    }

    render(){
        return(
            <div className="product">
                {this.state.discount ? <Discount discount={this.state.discount} cantDiscount={this.state.cantDiscount}></Discount> : <></>}
                <Favorite isFavorite={this.state.favorte}></Favorite>
                <div className="img-holder">
                    {/* <img src={}></img> */}
                </div>
            </div>
        )
    }
}


function Discount({discount,cantDiscount}){
    return(
        <>
            <span>
                {discount}%<br/>{cantDiscount}unds.
            </span>
        </>
    )
}



function Favorite({isFavorite}){
    return(
        <>
            {isFavorite ? <i className="bi bi-heart fav"></i> : <i className="bi bi-heart-fill fav fill"></i>}
        </>
    )
}