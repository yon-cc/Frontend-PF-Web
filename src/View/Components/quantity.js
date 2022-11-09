import React from "react";
import "./quantity.css";

export default class Quantity extends React.Component{

    constructor(props){
        super(props)

        this.state = {
            cant : 1
        }

        this.increase = this.increase.bind(this)
        this.decrease = this.decrease.bind(this)
        this.addToCart = this.addToCart.bind(this)
    }

    componentDidMount(){
        if(this.props.units){
            this.setState({cant:this.props.units})
        }
    }

    increase(){
        this.setState({cant: this.state.cant+1})
    }

    decrease(){
        if(this.state.cant-1 !== 0){
            this.setState({cant: this.state.cant-1})
        }
    }

    addToCart(e){
        // console.log(this.state.cant)
        this.props.funcAddToCart(this.state.cant);
    }

    render(){
        return(
            <>
                  <div class={this.props.small ? "cant-basket":"cesta-cant"}>
                      <div class="cant-inp" >{this.state.cant}</div>
                      <div class="buttons">
                          <div class="btn-cant" onClick={this.increase}>
                              <i class="bi bi-caret-up-fill" ></i>
                          </div>
                          <hr/>
                          <div class="btn-cant" onClick={this.decrease}>
                              <i class="bi bi-caret-down-fill"></i>
                          </div>
                      </div>
                  </div>
                
                {this.props.addToCart ? <button class="btn-carrito btn-modal" onClick={this.addToCart}><i class="bi bi-basket2-fill cesta modal-cesta" ></i>Añadir a la cesta</button> : <></>}
                  
            </>
        )
    }
    
}