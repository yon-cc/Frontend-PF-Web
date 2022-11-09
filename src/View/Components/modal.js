import React from 'react';
import './modal.css';
import { Favorite, Image } from './grid';
import Quantity from './quantity';
import controller from '../../Controller/controller';
import { Link } from 'react-router-dom';

export default function Modal({modalType, data, show, closeModal, submitSignIn,signIn,submitLogIn, closeCart}){
  
    if(show){
      document.body.style.overflow = "hidden"
    }else{
      document.body.style.overflow = "auto";
    }

    


    const checkPassword= (e)=>{
      if(document.getElementById("pass1").value !== document.getElementById("pass2").value){
        document.getElementById("dontPasswords").style.display = "block";
        document.getElementById("pass2").value = ""
        document.getElementById("captcha").checked = false;

      }else{
        document.getElementById("dontPasswords").style.display = "none";
      }
    }

    const controlChanges = (e)=>{
      document.getElementById("captcha").checked = false;
    }

    const openSignIn = (e)=>{
      closeModal(e);
      signIn();
      e.preventDefault();
    }


    let modalContent = <></>;
    let modalClass = <></>;
    // let errorForm = <></>;
    // let showError = <></>;

    switch (modalType) {
      case "product":

        const clickAdd = (cant)=>{
          if(sessionStorage.getItem("auth")==="true"){
            const dataSend = {email:sessionStorage.getItem("user"),id_product:data.id, units:cant}


            closeCart(dataSend);
            return
          }
          closeCart();
          alert("Por favor inicie sesion, para añadir productos a la cesta.")
        }

        window.scroll({top:0,left:0})
        

        modalContent = 
        <>
          <span span className="close" onClick={closeModal} id="close">&times;</span>

          <Image url={data.image}></Image>
          <div className="text">
            <Favorite modal={true}></Favorite>
            <h2 className="modal-title">{data.name}</h2>
            <h4><b>{data.detail}</b></h4>
            <h3>$ {data.price} </h3>
            <p className="descrp">{data.description}</p>
            <Quantity addToCart={true} funcAddToCart={clickAdd}> </Quantity>
          </div>
        </>

        modalClass = `${modalType}-content`
        break;

      case "sigIn":
        modalContent = <>
          <span span className="close" id="close">&times;</span>
            <div class="">
                <form onSubmit={submitSignIn}>
                    <h2>Crear nueva cuenta</h2>
                    <input type="text" name="name" id="" class="email-input" placeholder="Nombre" required/><br/>
                    <input type="text" name="lastname" id="" placeholder="Apellidos" required/><br/>
                    <h2>Informacion de inicio de sesion</h2>
                    <input type="email" name="email" id="" placeholder="Email"required/><br/>
                    <input type="password" name="password" id="pass1" placeholder="Contraseña" onKeyUp={controlChanges} required/><br/>
                    <input type="password" name="passwordConf" id="pass2" placeholder="Confirmar Contraseña" required/><br/>
                    
                    <p style={{color:"red",display:"none"}} id="dontPasswords">Las constraseñas no coinciden.</p>
                    <p>La contraseña debe contener al menos una mayuscula y un numero.</p>
                    <div class="captcha">
                        <input type="checkbox" name="captcha" id="captcha" required onClick={checkPassword}/>
                        <label htmlFor="captcha">No soy un robot</label>
                        <div class="" style={{display:"flex",alignItems: "center",flexDirection: "column",}}>
                            <img src="https://upload.wikimedia.org/wikipedia/commons/a/ad/RecaptchaLogo.svg" alt="Captcha"/><br/>
                            <span>
                                Privacidad - Terminos
                            </span>
                        </div>
                    </div>
                    
                    <input class="btn-carrito btn-access full left" style={{backgroundColor:"var(--green)", fontSize:"1.5rem"}} type="submit" value='Crear Cuenta'></input>
                    {/* <button class="btn-carrito btn-access full right" onClick={closeModal} style={{backgroundColor:"rgb(64, 64, 251)"}}>Accede con facebook</button> */}
                </form>
            </div>
        </>
        modalClass = `login`;

        break;

      case "logIn":
        modalContent = <>
            <span class="close" id="close">&times;</span>

            <div class="">
                <form onSubmit={submitLogIn}>
                    <label htmlFor="email" class="top-email" ><i class="bi bi-envelope-fill"></i> Email</label><br/>
                    <input type="email" name="emailL" id="" class="email-input"required/><br/>
                    <label htmlFor="pass"><i class="bi bi-lock-fill"></i> Contraseña</label><br/>
                    <input type="password" name="passwordL" id=""required/><br/>
                    <button class="btn-box left" onClick={openSignIn}>Crear cuenta</button>
                    <button class="btn-box right" id="recoverPass">Has olvidado tu contraseña</button>
                    
                    <div class="captcha">
                        <input type="checkbox" name="captcha" id=""required/>
                        <label htmlFor="captcha">No soy un robot</label>
                        <div class="" style={{display: "flex",alignItems: "center",flexDirection: "column",}}>
                            <img src="https://upload.wikimedia.org/wikipedia/commons/a/ad/RecaptchaLogo.svg" alt=""/><br/>
                            <span>                                Privacidad - Terminos
                            </span>
                        </div>
                    </div>
                    
                    <button type="submit" class="btn-carrito btn-access left" style={{backgroundColor:"var(--green)"}}>Accede</button>
                    <button class="btn-carrito btn-access right" style={{backgroundColor:"rgb(64, 64, 251)"}}>Accede con facebook</button>
                </form>
            </div>
        </>

        modalClass = `login`;
        break;

      case "cart": 
        const products = data.slice(0,data.length-1);
        const total = data.slice(data.length-1);

        console.log(products)
        console.log(total[0][0])
        modalContent = <>
          <span span className="close" onClick={closeModal} id="close">&times;</span>

            <h2>MI CARRITO</h2> <h2 id="cant-prod">({products.length})</h2>
            <hr style={{marginBottom: "0px"}}/>
            <div class="basket-container" id="basket-container">
              {/* {*DATAAA} */}
              {products.map((array)=>{
                return <ProductCart img={array[0].image} name={array[0].name} detail={array[0].detail} units={array[1].units} price={array[0].price}></ProductCart>
              })}

            </div>
            <div style={{overflow: "hidden"}}>
                <p class="left">Subtotal</p><p class="right money" id="subtotal">${total[0][0].subtotal}</p>
            </div>
            <hr/>
            <div style={{overflow: "hidden"}}>
                <h2 class="left" style={{marginRight: "0px", paddingRight:"10px"}}>TOTAL</h2><span class="iva left" style={{paddingTop:"2px"}}>(IVA incluido)</span> <h2 id="total" class="money right" style={{paddingRight: "0px"}}>${total[0][0].total}</h2>
            </div>
            <hr/>
            {/* <button class="btn-carrito btn-access full left" style={{backgroundColor:"var(--green)"}}>Ir al carrito</button> */}
            <Link to="/pedido" class="btn-carrito btn-access full left" style={{backgroundColor:"var(--green)"}}>Realizar pedido</Link>
        
        </>
        modalClass = `modal-basket`
        
        break;

      default: // * Defecto = Modal de Error
        document.body.style.overflow = "auto";
      
        modalContent = <>
        <span span className="close" onClick={closeModal} id="close">&times;</span>

        <h2 className="error">{data}</h2>
      
      </>
        modalClass = `${modalType}-content`
        break;
    }


    return (
      <>
        {show ?
        <div className={`modal open-bg modal-active ${modalType}-modal`} id="modal" onClick={closeModal}>

              <div className={`modal-content ${modalClass}`}>

                {modalContent}
              </div>

        </div> 
        : <></>
        }
      </>
    )
  }


export function ProductCart({img,name,detail,units,price}){
  return(<><div className='basket-item'>

    <Image url={img} holder={true}></Image>
    <div>
      <h3>{name}</h3>
      <br></br>
      <h4>{detail}</h4> <br></br>
      <h4>Cantidad</h4>
      <div className='cesta-small'>
      <Quantity units={units} small={true}></Quantity>

      </div>
      <h3 className='right'>$ {price}</h3>
    </div>
  </div>
    <hr style={{marginTop:"0px"}}></hr>
  </>)
}