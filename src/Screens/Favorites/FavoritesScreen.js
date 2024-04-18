import React from "react";
import { Component} from 'react';
import MovieCard from '../../Components/MovieCard/MovieCard'; 
import "../Home.css"

class Favorites extends Component{
    constructor(props){
        super(props);
        this.state = {
            favoritos: localStorage.getItem('favoritos'),
            peliculas: []
        };
    }

componentDidMount (){
    if (this.state.favoritos != null) {
        let storageParseado = JSON.parse(this.state.favoritos);
        Promise.all(
            storageParseado.map ((elm =>
                fetch('https://api.themoviedb.org/3/movie/${elm}?api_key=39761ff3840b501535e80bbc7bffb035')
                .then(res => res.json())
                .then(data => console.log(data))
                ))
        )
    .then(data => this.setState({peliculas : this.state.peliculas.concat(data)}))
    .catch(e => console.log(e))
    }
}

actualizarFavoritos (arrayStorage) {
    this.setState({favoritos: arrayStorage})
}

render(){
    return(
        <div>
            <h1>AQUI ESTAN TUS PELICULAS FAVORITAS:</h1>
                <div className="containerFavs">
                {this.state.peliculas.length > 0 ?
                this.state.peliculas.map((elm,idx) =>  <MovieCard actualizarFavoritos={(arr) => this.actualizarFavoritos(arr)}  esFavorito={true} data= {elm} key= {`${idx}-${elm.name}`}/>):
                <h1 className="noFavs">Todavia no has agregado peliculas a tu seccion de favoritos</h1>}
                </div>
        </div>
        )
    }
}

export default Favorites
