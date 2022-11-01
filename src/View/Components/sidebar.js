import React from 'react';
import './sidebar.css';

export default class Sidebar extends React.Component{
    render(){
        return(
        <div className='box'>
            <div className='filter'>
                <h2>Precio</h2>
                <form >
                    <input type="range" min="1" max="100" value='1' id='' />
                    <div className='limit left'>
                        <label for='lower'>Desde</label><br></br>
                        <input readOnly="readonly" type="text" className='filter-limit' id="" placeholder={`Pedir a la bd`} ></input>

                    </div>

                    <div className='limit right'>
                        <label for='higher'>De</label><br></br>
                        <input readOnly="readonly" type="text" className='filter-limit' id="" placeholder={`Pedir a la bd`} ></input>

                    </div>

                </form>

            </div>
        </div>
        )
    }
}