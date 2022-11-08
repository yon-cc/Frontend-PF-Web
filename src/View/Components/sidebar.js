import React from 'react';
import './sidebar.css';

export default class Sidebar extends React.Component{

    initialV = 0;

    constructor(props){
        super(props);

        this.state = {
            value:0,
        };

        this.handleChange = this.handleChange.bind(this);
        this.initialV = this.props.min;
    }


    handleChange(e){
        this.setState({value: e.target.value})
    }


    render(){
        if(this.state.value !== 0) this.initialV = this.state.value;
        if(this.initialV === 0) this.initialV = this.props.min

        return(
        <div className='box'>
            <div className='filter'>
                <h2>Precio</h2>
                <form >
                    <input type="range" min={this.props.min} max={this.props.max} value={this.state.value} id='priceFilter' onChange={this.handleChange} step="0.01" /><br></br>
                    <div className='limit left'>
                        <label htmlFor='lower'>Desde</label><br></br>
                        <input readOnly="readonly" type="text" className='filter-limit' id="" placeholder={`$ ${this.initialV}`} ></input>

                    </div>

                    <div className='limit right'>
                        <label htmlFor='higher'>De</label><br></br>
                        <input readOnly="readonly" type="text" className='filter-limit' id="" placeholder={`$ ${this.props.max}`} ></input>

                    </div>

                </form>

            </div>
        </div>
        )
    }
}