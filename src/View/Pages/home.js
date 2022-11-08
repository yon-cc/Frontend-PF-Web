import React from "react";
import Container from "../Components/container";
import Header from "../Components/header";
import ModalProducts from "../Components/modal";
import controller from '../../Controller/controller';
import Footer from "../Components/footer";


export default class Home extends React.Component{

    constructor(props){
        super(props)

        this.state = {
            max:0,
            min:0,
            data: [],
            page: 1,
            uLimit :0,
            lLimit :1,
            search:undefined,
        }

        this.clickPage = this.clickPage.bind(this);
        this.search = this.search.bind(this);
        this.deleteSearch = this.deleteSearch.bind(this);
    }

    componentDidMount(){

        controller.getLastPage().then(
            (data)=>{
                this.setState({uLimit:data})
                console.log(data);
            }      
        )
        
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

    getPageSearch(searched, endpoint){
        this.setState({page:1})
        controller.getProductsByName(endpoint, this.state.page).then(
            (data)=>{
                if(data.message){
                    document.getElementById("search").value = "";
                    alert(data.message);
                }else{
                    this.setState({data: data, search: searched}, ()=>{
                        document.getElementById("search").value = "";
                    });
                }

            }
        );
    }

    search(e){
        const searched = document.getElementById("search").value;
        const endpoint = searched.replace(/\s/g,"-")

        this.getPageSearch(searched,endpoint);
        e.preventDefault();

    }

    deleteSearch(){
        this.setState({search:undefined})
        this.getPage(1);
    }

    render(){
        console.log("Ulimit"+this.state.uLimit)

        return(<>
            <ModalProducts text="aa"></ModalProducts>
            <Header reset={this.deleteSearch} submitSearch={this.search}></Header>
            {this.state.search ? <div className="searched-box" onClick={this.deleteSearch}><h2 className="searched"><b> Busquedas para: </b>{this.state.search}</h2> <hr></hr></div> : <></>}
            
            <Container data={this.state.data} max={this.state.max} min={this.state.min}></Container>
            <Footer lLimit={this.state.lLimit} uLimit={this.state.uLimit} goTo={this.state.page} clickNum={this.clickPage}></Footer>
        </>)
    }
}