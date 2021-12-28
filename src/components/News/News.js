import { Component } from "react";
import "./News.css";
import Container from "./NewsContainer/Container";

export default class News extends Component{

    constructor(props) {
		super(props)
	}
    render(){
        return(
        <div className="auth-wrapper">
                 <div className="auth-inner">
                           {
                                 <Container/>
                           }
                </div>
         </div>
        )
    }
}