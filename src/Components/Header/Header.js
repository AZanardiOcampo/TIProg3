import React, { Component } from "react";
import "./Header.css"

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
          busqueda: "",
          peliculas: [],
        };
      }
    render(){
        return(
            <nav>
                
                <ul className="Header">
                    <p></p>
                    <li><a href="/" className="ElementosHeader">Home</a></li>
                    <li><a href="" className="ElementosHeader">Favoritos</a></li>
                    <li><a href="" className="ElementosHeader">Mas valoradas</a></li>
                    <li><a href="" className="ElementosHeader">Proximamente</a></li>
                    <p></p>
                </ul>
            </nav>
        )
    }
}

export default Header