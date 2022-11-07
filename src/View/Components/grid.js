import React, { useEffect, useState }  from "react";
import controller from "../../Controller/controller";
import "./grid.css"

// import {data} from "./temp";

export default class Grid extends React.Component{
    render(){
        console.log("PROPS")
        console.log(this.props.data);
        return(
            <div className="vitrina">
                {this.props.data.map((item)=>{
                    return <Product key={item._id} discount={item.discount[0]} cantDiscount={item.discount[1]} isFavorite={false} img={item.image} title={item.name} detail={item.detail} price={item.price}></Product>
                })}
            </div>
            
            )
    }
}


class Product extends React.Component{
    img = "";

    constructor(props){
        super(props);

        this.state = {
            discount: undefined,
            cantDiscount: 0,
            favorte: false,
        }
    }

    // componentDidMount(){
    //     controller.getImage(this.props.img).then(
    //         (url)=>{
    //             this.img = url;
    //         }
    //     );
    // }

    render(){
        // console.log(this.img)
        return(
            <div className="product">
                {this.state.discount ? <Discount discount={this.state.discount} cantDiscount={this.state.cantDiscount}></Discount> : <></>}
                <Favorite isFavorite={this.state.favorte}></Favorite>
                <Image url={this.props.img}></Image>
                {/* <div className="img-holder"> */}
                    {/* <img src={this.img} alt={`Img de ${this.props.title}`}></img> */}
                {/* </div> */}
                <h3 className="title">{this.props.title}</h3>
                <p> <b>{this.props.detail}</b> </p>
                <h3>$ {this.props.price}</h3>
                <BtnBasket></BtnBasket>
            </div>
        )
    }
}

function Image({url}){
    const endpoint = `http://localhost:1802/api/products/image/${url.split("images/").pop()}`


    const [img, setImg] = useState();

    const fetchImage = async () => {
      const res = await fetch(endpoint);
      const imageBlob = await res.blob();
      const imageObjectURL = URL.createObjectURL(imageBlob);
      setImg(imageObjectURL);
    };  

    useEffect(() => {
      fetchImage();
    }, []); 

    return (
      <div className="img-holder">
        <img src={img} alt="icons" />
      </div>
    );
}

function BtnBasket(){
    const handleClick = () =>{
        alert("Agregar al carrito");
    }

    return(
        <div className="btn-holder">
            <button className="btn-carrito" onClick={handleClick}>
                <i className="bi bi-basket2-fill cesta"></i>
                Agregar al carrito
            </button>
        </div>
    )
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