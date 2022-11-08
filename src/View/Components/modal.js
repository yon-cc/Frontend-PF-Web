import React from 'react';
import './modal.css';
import { Favorite, Image } from './grid';
import Quantity from './quantity';

export default function Modal({modalType, data, show, closeModal}){
  
    if(show){
      document.body.style.overflow = "hidden"
    }else{
      document.body.style.overflow = "auto";
    }

    let modalContent;
    let modalClass;
    console.log(modalType);
    switch (modalType) {
      case "product":
        

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
            <Quantity addToCart={true}> </Quantity>
          </div>
        </>

        modalClass = `${modalType}-content`
        break;

      case "sigIn":
        modalContent = <>
          <span span className="close" onClick={closeModal} id="close">&times;</span>
            <div class="">
                <form>
                    <h2>Crear nueva cuenta</h2>
                    <input type="text" name="email" id="" class="email-input" placeholder="Nombre"/><br/>
                    <input type="text" name="pass" id="" placeholder="Apellidos"/><br/>
                    <h2>Informacion de inicio de sesion</h2>
                    <input type="email" name="pass" id="" placeholder="Email"/><br/>
                    <input type="password" name="pass" id="" placeholder="Contraseña"/><br/>
                    <input type="password" name="pass" id="" placeholder="Confirmar Contraseña"/><br/>
                    
                    <p>La contraseña debe contener al menos una mayuscula y un numero.</p>
                    <div class="captcha">
                        <input type="checkbox" name="captcha" id=""/>
                        <label htmlFor="captcha">No soy un robot</label>
                        <div class="" style={{display:"flex",alignItems: "center",flexDirection: "column",}}>
                            <img src="https://upload.wikimedia.org/wikipedia/commons/a/ad/RecaptchaLogo.svg" alt="Captcha"/><br/>
                            <span>
                                Privacidad - Terminos
                            </span>
                        </div>
                    </div>
                    
                    <button class="btn-carrito btn-access full left" style={{backgroundColor:"var(--green)"}} type="submit">Crear Cuenta</button>
                    <button class="btn-carrito btn-access full right" style={{backgroundColor:"rgb(64, 64, 251)"}}>Accede con facebook</button>
                </form>
            </div>
        </>
        modalClass = `login`;

        break;

      case "logIn":
        modalContent = <>
            <span class="close" id="close">&times;</span>

            <div class="">
                <form action="#">
                    <label htmlFor="email" class="top-email"><i class="bi bi-envelope-fill"></i> Email</label><br/>
                    <input type="email" name="email" id="" class="email-input"/><br/>
                    <label htmlFor="pass"><i class="bi bi-lock-fill"></i> Contraseña</label><br/>
                    <input type="password" name="pass" id=""/><br/>
                    <button class="btn-box left" id="signin2">Crear cuenta</button>
                    <button class="btn-box right" id="recoverPass">Has olvidado tu contraseña</button>
                    
                    <div class="captcha">
                        <input type="checkbox" name="captcha" id=""/>
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

      case "basket":
        modalContent = <>
          <span span className="close" onClick={closeModal} id="close">&times;</span>

          <h2 className="error">{data}</h2>
        
        </>
        
        break;

      default:
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


