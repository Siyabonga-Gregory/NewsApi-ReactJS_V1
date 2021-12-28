import { Component } from "react";
import React from "react";
import "./Login.css";
import Form from "./LoginForm/Form";

export default class Login extends Component{
    
    render(){
        return(
            <div className="auth-wrapper">
               <div className="auth-inner">
                        <Form/>  
                   </div>
            </div>
              
        )
    }
}