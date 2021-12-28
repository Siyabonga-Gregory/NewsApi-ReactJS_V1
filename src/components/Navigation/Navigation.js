import { Component } from "react";
import './Navigation.css'

export default class Navigation extends Component{
    render()
    {
        return(
            <nav className="navbar navbar-expand navbar-light fixed-top">
            <div className="container">
              <a href="/" className="navbar-brand">Rewards</a>
                <div className="collapse navbar-collapse justify-content-end">
                    <ul className="navbar-nav ">
                          <li className="nav-item">
                              <a href="/login" className="nav-link">Login</a>
                          </li>
                          <li className="nav-item">
                              <a href="/register" className="nav-link">Register</a>
                          </li>
                    </ul>               
                </div>
            </div>
          </nav>
        )
    }
}