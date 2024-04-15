import React, { Component } from 'react';
import MovieCard from '../MovieCard/MovieCard';

class MovieDetail extends Component {
    constructor() {
        super();
        this.state = {
            favoritos: [],
            peliculas: {}
        };
    }

    componentDidMount() {
        const { match } = this.props; // Obtiene match de las props
        const { id } = match.params; // Obtiene el ID de la URL de match.params
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=0ac8f3235ecd7f1b9c2f99fa8b233126`)
        .then(response => response.json())
        .then(data => {
            this.setState({ peliculas: data.results }); // Actualiza el estado con los datos de la película
        })
        .catch(err => console.error(err));
    }

    actualizarFavoritos(arrayStorage) {
        this.setState({ favoritos: arrayStorage });
    }

    render() {
        console.log(this.state.peliculas);
        return (
            <section>
                <div className='ContainerDetail'>
                    <MovieCard
                        actualizarFavoritos={(arr) => this.actualizarFavoritos(arr)}
                        esFavorito={this.state.favoritos.includes(this.state.peliculas.id)}
                        peliculas={this.state.peliculas} // Pasa los datos de la película a MovieCard
                    />
                </div>
            </section>
        );
    }
}

export default MovieDetail;
