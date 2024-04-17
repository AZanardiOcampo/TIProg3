import React from "react";
import { Component } from "react";
import './SearchResults.css';

class SearchResults extends Component {
constructor(props){
    super(props)
    this.state = {
        valorInput: ''
    }
}
evitarSubmit(event) {
    event.preventDefault();
    this.props.history.push('/Results/'+this.state.valorInput)
}
controlarCambio(e){
    this.setState({
        valorInput: e.target.value
    })
}

render(){
    return (
        <div className="search-container"> 
        <form onSubmit={(e) => this.evitarSubmit(e)} className="buscador">
            <input
                type="text"
                placeholder="Buscar pelicula"
                name="busqueda"
                onChange={(e) => this.controlarCambio(e)}
                value={this.state.valorInput}
                className="search-input" 
            />
            <button type="submit" className="search-button">Buscar</button> 
        </form>
    </div>
    )
}
}

export default SearchResults