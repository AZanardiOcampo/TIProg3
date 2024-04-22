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
            <section>
                <header class="headerPosta">
                    MOVIEMASTERS
                </header>
                
                <nav>
                    <ul className="Header">
                        <p></p>
                        <li><Link to="/"  className="ElementosHeader">HOME</Link></li>
                        <li><Link to="/Favorites"  className="ElementosHeader">FAVORITOS</Link></li>
                        <li><Link to="/AllTop"  className="ElementosHeader">MEJOR VALORADAS</Link></li>
                        <li><Link to="/AllUpcoming"  className="ElementosHeader">PROXIMAMENTE</Link></li>
                        <p></p>
                    </ul>
                </nav>
            </section>
            
            
                
        )
    }
}

export default Header