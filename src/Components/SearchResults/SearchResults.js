import React from "react";
import { Component } from "react";

class SearchResults extends Component {
constructor(props){
    super(props)
    this.state = {
        valorInput: ''
    }
    console.log('props del search', props)
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
        <form className='buscador' onSubmit={(e) => this.evitarSubmit(e)}>
        <input type='text' placeholder='Buscar pelicula' name='busqueda' onChange={(e)=> this.controlarCambio(e)} value = {this.state.valorInput} />
        <input type= 'submit' value= 'Submit'></input>
    </form>
    )
}
}

export default SearchResults