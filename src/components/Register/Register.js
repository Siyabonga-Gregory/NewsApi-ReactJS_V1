import { Component } from "react";
import Form from "./RegisterForm/Form";
import "./Register.css";

export default class Register extends Component{
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