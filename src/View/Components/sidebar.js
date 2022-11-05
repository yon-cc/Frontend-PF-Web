import React from 'react';
import './sidebar.css';
import controller from '../../Controller/controller';

export default class Sidebar extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            value:1,
            max:0,
            min:0,
        };

        this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount(){
        controller.getMaxMin().then(
            (maxmin)=>{
                this.setState({max: maxmin.max, min:maxmin.min})
            }
        );
    }

    handleChange(e){
        this.setState({value: e.target.value})
    }


    render(){
        console.log(this.state.max)
        console.log(this.state.min)
        return(
        <div className='box'>
            <div className='filter'>
                <h2>Precio</h2>
                <form >
                    <input type="range" min={this.state.min} max={this.state.max} value={this.state.value} id='priceFilter' onChange={this.handleChange} step="1" /><br></br>
                    <div className='limit left'>
                        <label htmlFor='lower'>Desde</label><br></br>
                        <input readOnly="readonly" type="text" className='filter-limit' id="" placeholder={`$ ${this.state.value}`} ></input>

                    </div>

                    <div className='limit right'>
                        <label htmlFor='higher'>De</label><br></br>
                        <input readOnly="readonly" type="text" className='filter-limit' id="" placeholder={this.state.max} ></input>

                    </div>

                </form>

            </div>
        </div>
        )
    }
}