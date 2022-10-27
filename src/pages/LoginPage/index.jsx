import React, { Component } from "react"
import Login from "../../components/Login";
import Navbar from "../../components/NavBar";

class LoginPage extends Component {
    constructor(){
        super();
        this.state ={name:'',email:''};
    }

    onChangeHandler=(event)=>{
        this.setState({
            [event.target.name]:event.target.value
        })
    }

    render(){
        return(
           <>
             <Navbar />
             <Login />
           </>
        )

    }
    
}

export default LoginPage;