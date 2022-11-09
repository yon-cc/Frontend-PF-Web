import React from "react";
import Container from "../Components/container";
import Header from "../Components/header";
import Modal from "../Components/modal";
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
            priceBet : undefined,
            modal: {data:undefined, show:false, type:""},
            notify:{data:undefined, show:false}
        }

        this.clickPage = this.clickPage.bind(this);
        this.search = this.search.bind(this);
        this.deleteSearch = this.deleteSearch.bind(this);
        this.deletePrice = this.deletePrice.bind(this);
        this.clickFilter = this.clickFilter.bind(this);
        this.clickModal = this.clickModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
        this.logIn = this.logIn.bind(this);
        this.sigIn = this.sigIn.bind(this);
        this.submitLogIn = this.submitLogIn.bind(this);
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
        
    }

    getLastPage(){
        if(this.state.search){
            controller.getLastPageSearch(this.state.search).then(
                (data)=>{
                    this.setState({uLimit:data})
                    console.log("Searcj"+data);
                }      
            )

            return
        }

        if(this.state.priceBet){
            controller.getLastPagePrice(this.state.priceBet[0],this.state.priceBet[1]).then(
                (data)=>{
                    this.setState({uLimit:data})
                    // console.log("Searcj"+data);
                }      
            )

            return;
        }

        controller.getLastPage().then(
            (data)=>{
                this.setState({uLimit:data})
            }      
        )
    }

    getPage(number){
        if(this.state.search){
            controller.getProductsByName(this.state.search, number).then(
                (data)=>{
                    if(data.message){
                        document.getElementById("search").value = "";
                        
                        this.modalAlert(data.message);
                        // alert(data.message);
                    }else{
                        this.setState({data: data}, ()=>{
                            document.getElementById("search").value = "";
                        });
                    }
    
                }
            );

            return;
        }

        if(this.state.priceBet){
            controller.getProductsByPrice(this.state.priceBet[0],this.state.priceBet[1], number).then(
                (data)=>{
                    if(data.message){
                        document.getElementById("lowerFilter").value = this.state.min
                        alert(data.message);
                    }else{
                        this.setState({data: data},);
                    }
    
                }
            )

            return;
        }

        controller.getProducts(number).then(
            (data) =>{
                this.setState({data: data});
            }
        );
    }

    search(e){
        const searched = document.getElementById("search").value;
        const endpoint = searched.replace(/\s/g,"-")

        this.setState({search:endpoint},()=>{
            this.getPage(1);
            this.getLastPage();
        })

        e.preventDefault();

    }

    deleteSearch(){
        this.setState({search:undefined})
        this.getPage(1);
    }

    deletePrice(){
        
        this.setState({priceBet:undefined, reset:false}, ()=>{
            this.getPage(1);
            document.getElementById("lowerFilter").value = this.state.min;
        })
        
    }

    clickFilter(e){
        
        const maxStr = (document.getElementById("upperFilter").value).replace("$","")
        const minStr = (document.getElementById("lowerFilter").value).replace("$","")

        const max = Math.ceil(Number(maxStr));
        const min = Number(minStr);

        this.setState({priceBet : [min, max], reset: true},()=>{
            this.getPage(1);
            this.getLastPage();
        })

        e.preventDefault();
    }

    clickModal(id){
        controller.getProductsById(id).then(
            (data)=>{
                this.setState({modal:{data,show:true, type:"product"}});
            }
        );
    }   

    closeModal(e){
         if(e.target.id === "modal" || e.target.id === "close"){
            this.setState({modal:{data:undefined, show:false}});
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
    
    submitLogIn (e){
        const name = document.getElementsByName("name")[0].value
        const lastname = document.getElementsByName("lastname")[0].value
        const email = document.getElementsByName("email")[0].value
        const password = document.getElementsByName("password")[0].value
  
        const data = {name, lastname, email, password}
        console.log(data)
        this.setState({modal:{show:false}} )

        controller.singUp(data).then(
          (dataR)=>{
              alert(dataR.message)
          }
        )
        e.preventDefault();
    }

    render(){
        // console.log("Ulimit"+this.state.uLimit)
        return(<>

            {this.state.modal.show ? <Modal modalType={this.state.modal.type} show={this.state.modal.show} data={this.state.modal.data} closeModal={this.closeModal} submitLogIn={this.submitLogIn}></Modal> : <></>}
            
{/* 
            {this.state.notify.show ? <Modal modalType={"notify"} show={this.state.notify.show} data={this.state.notify.data} key="notify"></Modal> : <></>
            } */}

            
            <Header reset={this.deleteSearch} submitSearch={this.search} logIn={this.logIn} sigIn={this.sigIn}></Header>
            {this.state.search ? <div className="searched-box" onClick={this.deleteSearch}><h2 className="searched"><b> Busquedas para: </b>{this.state.search}</h2> <hr></hr></div> : <></>}
            
            <Container data={this.state.data} max={this.state.max} min={this.state.min} submitFilter={this.clickFilter} reset={this.state.reset} deletePrice={this.deletePrice} clickProduct={this.clickModal}></Container>

            <Footer lLimit={this.state.lLimit} uLimit={this.state.uLimit} goTo={this.state.page} clickNum={this.clickPage}></Footer>
        </>)
    }
}