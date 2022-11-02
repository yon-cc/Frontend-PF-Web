import React from 'react';
import './sidebar.css';

export default class Sidebar extends React.Component{

    constructor(props){
        super(props);

        this.state = {value:1};

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e){
        this.setState({value: e.target.value})
    }

    render(){
        return(
        <div className='box'>
            <div className='filter'>
                <h2>Precio</h2>
                <form >
                    <input type="range" min="1" max="100" value={this.state.value} id='priceFilter' onChange={this.handleChange} step="1" /><br></br>
                    <div className='limit left'>
                        <label htmlFor='lower'>Desde</label><br></br>
                        <input readOnly="readonly" type="text" className='filter-limit' id="" placeholder={`$ ${this.state.value}`} ></input>

                    </div>

                    <div className='limit right'>
                        <label htmlFor='higher'>De</label><br></br>
                        <input readOnly="readonly" type="text" className='filter-limit' id="" placeholder={`$ 100`} ></input>

                    </div>

                </form>

            </div>
        </div>
        )
    }
}