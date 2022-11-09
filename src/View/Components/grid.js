import React, { useEffect, useState }  from "react";
import controller from "../../Controller/controller";
import "./grid.css"

export default class Grid extends React.Component{
    render(){
        // console.log(this.props.data)
        return(
            <>

            <div className="vitrina">
                {this.props.data.map((item)=>{
                    return <Product key={item._id} idP={item.id} discount={item.discount[0]} cantDiscount={item.discount[1]} isFavorite={false} img={item.image} title={item.name} detail={item.detail} price={item.price} clickProduct={this.props.clickProduct} removeFav={this.props.removeFav} updateGrid={this.props.updateGrid}></Product>
                })}
            </div>
            {/* <Example></Example> */}
            </>
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
            favorite: false,
        }

        this.addToFavorites = this.addToFavorites.bind(this)
    }

    addToFavorites(e){
        const id = this.props.idP;
        if(e.target.id === "favorite"){
            // console.log(this.props.idP)

            if(sessionStorage.getItem("auth")==="true"){
                // console.log(e.target.id)
                // console.log(id)
                controller.addToFavorites({email:sessionStorage.getItem("user"),id_product:id}).then(
                    (dataR)=>{
                        alert(dataR.message)
                    }
                  )
                return
            }
            
            alert("Por favor inicie sesion, para agregar productos a favoritos.")
        }

        if(e.target.id=== "removeFav"){
            controller.removeFromFavorites({email:sessionStorage.getItem("user"),id_product:id}).then(
                (dataR)=>{
                    alert(dataR.message)
                }
              )

            this.props.updateGrid();
            return
        }

        this.props.clickProduct(id);
    }

    render(){
        return(
            <div className="product" id={this.props.idP} onClick={this.addToFavorites} >
                {this.state.discount ? <Discount discount={this.state.discount} cantDiscount={this.state.cantDiscount}></Discount> : <></>}
                <Favorite isFavorite={this.state.favorite} removeFav={this.props.removeFav}></Favorite>
                <Image url={this.props.img} holder={true}></Image>

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

export function Image({url, holder}){
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
        <>
            {(holder ? 
            <div className="img-holder">
                <img src={img} alt="img"/>
            </div> 
            : <img src={img} alt="img"></img>)}
        </>
    );
}

function BtnBasket(){

    return(
        <div className="btn-holder">
            <button className="btn-carrito">
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



export class Favorite extends React.Component{

    constructor(props){
        super(props);

        this.state = {isFavorite:false}

    }


    render(){
        return(
            <>
                {this.props.modal ? 
                <>
                <div className="fav-box-modal"  id="favorite">  

                    <i className="bi bi-heart  fav-modal" id="favorite" ></i>
                    <i className="bi bi-heart-fill  fill fav-modal"   id="favorite"></i>
                    {this.state.isFavorite ? <i className="bi bi-heart-fill fav "id="favorite" ></i>:<></>}
                    
                </div>

                </> : 
                <>
                <div className="fav-box" id="favorite">         
                    {this.props.removeFav ? 
                    <><i className="bi bi-heart fav" id="removeFav"  ></i>
                    <i className="bi bi-x-circle-fill fav fill" id="removeFav"  ></i></>
                    :
                    <><i className="bi bi-heart fav" id="favorite"  ></i>
                    <i className="bi bi-heart-fill fav fill" id="favorite"  ></i>
                    {this.state.isFavorite ? <i className="bi bi-heart-fill fav " id="favorite" ></i>:<></>}</>
                    }         

                </div>

                </>}
                
            </>
        )
    }
}
