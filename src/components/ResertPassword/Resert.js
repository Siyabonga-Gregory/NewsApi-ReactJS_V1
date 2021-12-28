import { Component } from "react";
import React from "react";
import "./Resert.css";
import Form from "./ResertForm/Form";

export default class Resert extends Component{
    
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