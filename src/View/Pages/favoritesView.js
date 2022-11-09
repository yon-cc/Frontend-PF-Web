import React from "react";
import Header from "../Components/header";
import controller from '../../Controller/controller';
import Container from "../Components/container";
import Footer from "../Components/footer";
import Modal from "../Components/modal";


export default class FavoritesView extends React.Component{

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
            priceBet : undefined,
            modal: {data:undefined, show:false, type:""},
            notify:{data:undefined, show:false}
        }

        this.clickPage = this.clickPage.bind(this);
        this.clickModal = this.clickModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
        this.logIn = this.logIn.bind(this);
        this.sigIn = this.sigIn.bind(this);
        this.submitSignIn = this.submitSignIn.bind(this);
        this.submitLogIn = this.submitLogIn.bind(this);
        this.updateGrid = this.updateGrid.bind(this);
        // this.addToCart = this.addToCart.bind(this);
        // this.showCart = this.showCart.bind(this);
    }

    componentDidMount(){

        this.getLastPage();
        this.getPage(1);

        controller.getMaxMin().then(
            (maxmin)=>{
                this.setState({max:maxmin[0].max, min:maxmin[0].min})
            }
        );

    }
    
    clickPage(e){
        this.setState({page:e.target.id}, ()=>{this.getPage(this.state.page);})
        window.scroll({top:0,left:0,behavior:'smooth'})
        // console.log(sessionStorage.getItem("auth"));
        // console.log(sessionStorage.getItem("user"));

    }

    getLastPage(){
        console.log(sessionStorage.getItem("user"))
        controller.getLastPageFavorites(sessionStorage.getItem("user")).then(
            (data)=>{
                console.log(data)
                this.setState({uLimit:data})
            }      
        )
        
    }

    getPage(number){
        controller.getFavorites(sessionStorage.getItem("user"),number).then(
            (data) =>{
                this.setState({data: data});
            }
        );
    }

    clickModal(id){
        // console.log(id)
        controller.getProductsById(id).then(
            (data)=>{
                this.setState({modal:{data,show:true, type:"product"}});
            }
        );
    }   

    closeModal(e){
         if(e.target.id === "modal" || e.target.id === "close"){
            this.setState({modal:{data:undefined, show:false}});
              document.body.style.overflow = "auto";
        }
    }

    modalAlert(message){
        this.setState({search:undefined, modal:{data:message,show:true,type:"error"}},()=>{
            setTimeout(()=>{
                this.setState({modal:{data:undefined,show:false,type:""}})
            }, 1500)
        })
    }

    logIn(){
        this.setState({modal:{data:"", show:true,type:"logIn"}})
    }

    sigIn(){
        this.setState({modal:{data:"", show:true,type:"sigIn"}})
    }
    
    submitSignIn (e){
        const name = document.getElementsByName("name")[0].value
        const lastname = document.getElementsByName("lastname")[0].value
        const email = document.getElementsByName("email")[0].value
        const password = document.getElementsByName("password")[0].value
  
        const data = {name, lastname, email, password}
        // console.log(data)
        this.setState({modal:{show:false}} )

        controller.singUp(data).then(
          (dataR)=>{
              alert(dataR.message)
          }
        )
        e.preventDefault();
    }

    submitLogIn(e){
        const email = document.getElementsByName("emailL")[0].value
        const password = document.getElementsByName("passwordL")[0].value

        const data = {email, password}
        this.setState({modal:{show:false}} )
        // console.log(sessionStorage.getItem("auth"));

        controller.LogIn(data).then(
          (dataR)=>{
              alert(dataR.message)
              if(dataR.row){
                sessionStorage.setItem("auth", "true");
                sessionStorage.setItem("user",dataR.row.email)
              }
          }
        )
        e.preventDefault();
    }

    updateGrid(){
        console.log("Actualzar")
        this.getPage(1);
        
        // this.setState({data});
    }

    render(){

        return(<>
            {this.state.modal.show ? <Modal modalType={this.state.modal.type} show={this.state.modal.show} data={this.state.modal.data} closeModal={this.closeModal} submitSignIn={this.submitSignIn} signIn={this.sigIn} submitLogIn={this.submitLogIn} closeCart={this.addToCart} ></Modal>  : <></>}

            <Header   logIn={this.logIn} sigIn={this.sigIn} showCart={this.showCart} onFavorites={true} disableSearchBar={true}></Header>
            {this.state.search ? <div className="searched-box" ><h2 className="searched"><b> Busquedas para: </b>{this.state.search}</h2> <hr></hr></div> : <></>}


            
            <Container data={this.state.data} max={this.state.max} min={this.state.min}  reset={this.state.reset} clickProduct={this.clickModal} disableFilter={true} noContent={this.state.uLimit===0} removeFav={true} updateGrid={this.updateGrid}></Container>
                     

            
            <Footer lLimit={this.state.lLimit} uLimit={this.state.uLimit} goTo={this.state.page} clickNum={this.clickPage}></Footer>

        </>)
    }
}