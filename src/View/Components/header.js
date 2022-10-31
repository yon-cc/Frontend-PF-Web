import React from 'react';
import './header.css';
// import ReactDOM from 'react-dom/client';
import logo from './logobuena.jpg';

// import ReactDOM from 'react-dom/client';


export default class Header extends React.Component{



    render(){
        return(
            <header>
                <div className='box-logo'>
                    <img className='logo' src={logo} alt='Logo Buena Vida'  ></img>
                </div>

                <div className='search'>
                    <form action='#' className='search-form'>
                        <input type="search" name="" id="search" className="search-inp" placeholder="¿Qué producto estás buscando...?" ></input>
                    <button type="submit" className="search-sub" id="search-sub" >
                    <svg xmlns="http://www.w3.org/2000/svg"  fill="currentColor" className="bi bi-search search-icon" viewBox="0 0 16 16">
                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                </svg></button>
                    </form>
                </div>
                
                <div className='menu'>
                    <div className='box-icon'>
                        <button className='btn-nav' >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="icon" viewBox="0 0 16 16">
                                <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"/>
                            </svg>
                            <p>Mis favoritos</p>
                        </button>
                    </div>

                    <div className='box-icon'>
                        <button className='btn-nav' >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16" class="icon" id="userOptions">
                            <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" id="userOptions"/>
                            <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z" id="userOptions"/>
                        </svg>
                            <p>Mi Cuenta</p>
                        </button>
                    </div>

                    <div className='box-icon'>
                    <button  className='btn-nav' >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="icon" viewBox="0 0 16 16" id="basket">
                            <path d="M5.757 1.071a.5.5 0 0 1 .172.686L3.383 6h9.234L10.07 1.757a.5.5 0 1 1 .858-.514L13.783 6H15.5a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H.5a.5.5 0 0 1-.5-.5v-1A.5.5 0 0 1 .5 6h1.717L5.07 1.243a.5.5 0 0 1 .686-.172zM3.394 15l-1.48-6h-.97l1.525 6.426a.75.75 0 0 0 .729.574h9.606a.75.75 0 0 0 .73-.574L15.056 9h-.972l-1.479 6h-9.21z" id="basket"/>
                        </svg>
                            <p>Mi Carrito</p>
                        </button>
                    </div>

                </div>
            </header>

        )
    }
}