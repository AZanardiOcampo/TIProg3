import React, { Component } from 'react';
import MovieCard from '../MovieCard/MovieCard';
import { Link } from 'react-router-dom';
import '../AllTop/AllTop.css'

class AllTop extends Component {
    constructor() {
        super();
        this.state = {
            peliculas: [], // Inicializa el estado con un array vacío para las películas
            favoritos: []
        };
    }

    componentDidMount() {
        fetch("https://api.themoviedb.org/3/movie/top_rated?api_key=0ac8f3235ecd7f1b9c2f99fa8b233126")
            .then(res => res.json())
            .then(data => {
                console.log(data.results);
                this.setState({ peliculas: data.results });
            })
            .catch(e => console.log(e));
    }

    favoritos(arrayStorage) {
        this.setState({ favoritos: arrayStorage });
    }

    render() {
        return (
            <div  className="Alltop">
                {
                    this.state.peliculas.map((elm, idx) => (
                        <MovieCard
                            key={idx + elm.title}
                            actualizarFavoritos={(arr) => this.favoritos(arr)}
                            esFavorito={this.state.favoritos.includes(elm.id)}
                            peliculas={elm} // Pasa los datos de la película como una prop llamada "peliculas"
                        />
                    ))
                }
            </div>
        );
    }
}

export default AllTop;