import React, { Component } from "react";
import { Link } from "react-router-dom";
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
                    <li><Link to="/"  className="ElementosHeader">Home</Link></li>
                    <li><Link to="/Favorites"  className="ElementosHeader">Favoritos</Link></li>
                    <li><Link to="/AllTop"  className="ElementosHeader">Mas valoradas</Link></li>
                    <li><Link to="/AllUpcoming"  className="ElementosHeader">Proximamente</Link></li>
                    <p></p>
                </ul>
            </nav>
        )
    }
}

export default Header