import React from "react";
import Container from "../Components/container";
import Header from "../Components/header";
// import Sidebar from "../Components/sidebar";

export default class Home extends React.Component{
    render(){
        return(<>
            <Header></Header>
            <Container></Container>
        </>)
    }
}