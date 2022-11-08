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
    }

    increase(){
        this.setState({cant: this.state.cant+1})
    }

    decrease(){
        if(this.state.cant-1 !== 0){
            this.setState({cant: this.state.cant-1})
        }
    }

    render(){
        return(
            <div class="cesta-cant">
                  <div class="cant">
                      <div class="cant-inp">{this.state.cant}</div>
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
                
                {this.props.addToCart ? <button class="btn-carrito btn-modal"><i class="bi bi-basket2-fill cesta modal-cesta" ></i>Añadir a la cesta</button> : <></>}
                  
            </div>
        )
    }
    
}