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
        this.resetFilter = this.resetFilter.bind(this);
        this.initialV = this.props.min;
    }


    handleChange(e){
        this.setState({value: e.target.value})
    }

    resetFilter(){
        this.initialV = this.props.min;
        this.setState({value:this.initialV});
        this.props.deletePrice();
    }

    render(){
        if(this.state.value !== 0) this.initialV = this.state.value;
        if(this.initialV === 0) this.initialV = this.props.min

        return(
        <div className='box'>
            <div className='filter'>
                <h2>Precio</h2>
                <form onSubmit={this.props.submitFilter}>
                    <input type="range" min={this.props.min} max={this.props.max} value={this.state.value} id='priceFilter' onChange={this.handleChange} step="0.01" /><br></br>
                    <div className='limit left'>
                        <label htmlFor='lower'>Desde</label><br></br>
                        <input readOnly="readonly" type="text" className='filter-limit' id="lowerFilter" value={`$ ${this.initialV}`} ></input>

                    </div>

                    <div className='limit right'>
                        <label htmlFor='higher'>De</label><br></br>
                        <input readOnly="readonly" type="text" className='filter-limit' id="upperFilter" value={`$ ${this.props.max}`} ></input>

                    </div>
                    <input type="submit" value="Filtrar"/>
                    {this.props.reset ? <input type="button" value="Eliminar Filtro" onClick={this.resetFilter}></input> : <></>}
                    
                    {/* <button type='submit'onClick={this.props.clickFilter}>Filtrar</button> */}
                </form>

            </div>
        </div>
        )
    }
}