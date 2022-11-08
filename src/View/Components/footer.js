import React from 'react';
import './footer.css';

export default class Footer extends React.Component{

    lLimit = 1;
    uLimit = 5;

    constructor(props){
        super(props);
        
        if(this.props.uLimit < this.uLimit) this.uLimit = this.props.uLimit 
    }

    fillArray(from, to){
        const arr = []
        for (let index = from; index < to+1; index++) {
            arr.push(index);            
        }
        return arr;
    }

    render(){
        if(this.props.uLimit < this.uLimit) this.uLimit = this.props.uLimit 

        if(this.props.uLimit > this.uLimit && this.props.uLimit<=5) this.uLimit = this.props.uLimit
        // console.log("PROPS:"+this.props.uLimit)
        // console.log(this.uLimit)

        let pages = []

        if(this.lLimit <= this.props.goTo && this.props.goTo <= this.uLimit){
            pages = this.fillArray(this.lLimit, this.uLimit)
        }
        else{
            this.lLimit = (Number(this.props.goTo)-2 < this.props.lLimit) ? this.props.lLimit : this.props.goTo-2;
            
            this.uLimit = (Number(this.props.goTo)+2 > this.uLimit) ? this.props.uLimit : Number(this.props.goTo)+2

            pages = this.fillArray(this.lLimit, this.uLimit) ;
        }

        return(<>
        <footer className='pag' onClick={this.props.clickNum}>
            {pages[0] !==this.props.lLimit ? <button id={(pages[0]-2)}  className="link-pag arrow active"  href="" ><i className="bi bi-chevron-left" id={(pages[0]-2)}  ></i></button> : <></>}

            {pages.map((page)=>{
                if(page === Number(this.props.goTo)) return <button className="link-pag active current"id={page} >{page}</button>
                return <button className="link-pag active"id={page} >{page}</button>
            })}

            {pages[pages.length-1] !== this.props.uLimit ? <button  className="link-pag arrow active" id={(pages[4]+2)} href="" ><i className="bi bi-chevron-right" id={(pages[4]+2)}></i></button> : <></>}
        </footer>

        </>)
    }
}
