import React from "react";
import { Component } from "react";

class SearchResults extends Component {
constructor(props){
    super(props)
    this.state = {}
}

render(){
    return (
        <form className='buscador'>
        <input type='text' placeholder='Buscar pelicula' name='busqueda'></input>
        <button>Buscar</button>
    </form>
    )
}
}

export default SearchResults