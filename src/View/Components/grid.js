import React, { useEffect, useState }  from "react";
// import controller from "../../Controller/controller";
import "./grid.css"
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import ModalProducts from "./modal";
// import 'bootstrap/dist/css/bootstrap.min.css';

// import {data} from "./temp";

export default class Grid extends React.Component{
    render(){
        console.log(this.props.data)
        return(
            <>

            <div className="vitrina">
                {this.props.data.map((item)=>{
                    return <Product key={item._id} idP={item._id} discount={item.discount[0]} cantDiscount={item.discount[1]} isFavorite={false} img={item.image} title={item.name} detail={item.detail} price={item.price}></Product>
                })}
            </div>
            {/* <Example></Example> */}
            </>
            )
    }
}

function Example() {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
      <>
        <Button variant="primary" onClick={handleShow}>
          Launch demo modal
        </Button>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }

class Product extends React.Component{
    img = "";

    constructor(props){
        super(props);

        this.state = {
            discount: undefined,
            cantDiscount: 0,
            favorite: false,
        }

        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(){
        console.log(this.props.idP)
    }

    render(){
        return(
            <div className="product" onClick={this.handleClick}>
                {this.state.discount ? <Discount discount={this.state.discount} cantDiscount={this.state.cantDiscount}></Discount> : <></>}
                <Favorite isFavorite={this.state.favorite}></Favorite>
                <Image url={this.props.img}></Image>

                <div>
                <h3 className="title">{this.props.title}</h3>

                </div>
                <p> <b>{this.props.detail}</b> </p>
                <h3>$ {this.props.price}</h3>
                <BtnBasket></BtnBasket>
            </div>
        )
    }
}

function Image({url}){
    const [img, setImg] = useState();

    const fetchImage = async () => {
      const res = await fetch(url);
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
        <div className="fav-box">  
            <i className="bi bi-heart fav"></i>
            <i className="bi bi-heart-fill fav fill" ></i>
            {/* {isFavorite ? <i onMouseEnter={mouseIn} onMouseLeave={mouseOut} className="bi bi-heart-fill fav "></i> : <i className="bi bi-heart fav  "></i>} */}
        </div>
    )
}