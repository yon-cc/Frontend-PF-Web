import React from "react";
import Container from "../Components/container";
import Header from "../Components/header";
import ModalProducts from "../Components/modal";
import controller from '../../Controller/controller';
import Footer from "../Components/footer";


export default class Home extends React.Component{

    lLimit = 1;
    uLimit = 3;

    constructor(props){
        super(props)

        this.state = {
            max:0,
            min:0,
            data: [],
            page: 1,
        }

        this.clickPage = this.clickPage.bind(this)
    }

    componentDidMount(){
        
        this.getPage(1);

        controller.getMaxMin().then(
            (maxmin)=>{
                this.setState({max: maxmin[0].max, min:maxmin[0].min})
            }
        );
    }

    clickPage(e){
        this.setState({page:e.target.id}, ()=>{this.getPage(this.state.page);})
        
    }

    getPage(number){
        controller.getProducts(number).then(
            (data) =>{
                this.setState({data: data});
            }
        );
    }

    render(){
        return(<>
            <ModalProducts text="aa"></ModalProducts>
            <Header></Header>
            <Container data={this.state.data} max={this.state.max} min={this.state.min}></Container>
            <Footer lLimit={this.lLimit} uLimit={this.uLimit} goTo={this.state.page} clickNum={this.clickPage}></Footer>
        </>)
    }
}